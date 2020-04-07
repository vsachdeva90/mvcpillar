/**
 *  MVCPillar: A simple mvc structure using nodejs
 *  FileName : mongoHandler.js
 *  Purpose  : File for Hanlding db mongo database connection
 */
'use strict';
var requestedDbs = require('../app/config/appDatabase.js');
const MongoClient = require('mongodb').MongoClient;
var mongoConfig = requestedDbs.mongo;
const mongoHost = mongoConfig.host;
const mongoPort = mongoConfig.port;
const dbName = mongoConfig.database;
const mongoUser = mongoConfig.user;
const mongoPass = mongoConfig.password;
const credentials = 'mongodb://' + mongoUser + ':' + mongoPass + '@' + mongoHost + ':' + mongoPort;
var _mongoObj = {};

 function connect() {
    return new Promise(function (resolve, reject) {
        MongoClient.connect(credentials, {useUnifiedTopology: true}, function (err, client) {
            if(err){
                reject();
            }
            else{
                const db = client.db(dbName);
                resolve(db);
            }                    
        });
    });
}

function setConnection(){
    connect().then(mongo=>{
        _mongoObj = mongo;
    });
}

function getConnection(){
    return _mongoObj;
}

setConnection();
module.exports = getConnection;