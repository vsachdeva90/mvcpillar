/**
 *  MVCPillar: A simple mvc structure using nodejs
 *  FileName : appDatabase.js
 *  Purpose  : File contains database credentials
 */
const db = {
    // Mongo database connect credentials
    "mongo": {
        "database": "",
        "host": "",
        "port": "27017",
        "user": "",
        "password": ""
    }
};
module.exports = db;