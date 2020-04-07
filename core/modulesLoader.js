/**
 *  MVCPillar: A simple mvc structure using nodejs
 *  Filename : modulesLoader.js
 *  Purpose  : A single file for loading all the modules,when included in any js
 *  @author  : VS
 */
'use strict';
var appRoot = require('app-root-path');
var appConfig = require(appRoot.path + '/app/config/appConfig.js');
module.exports = {
    express: require('express'),
    http: require('http'),
    url: require('url'),
    routes: require('./routeHandler.js'),
    pug: require('pug'),
    bodyParser: require('body-parser'),
    appConstants: require('../app/config/appConstants.js'),
    applicationRoutes: require('../app/config/appRoutes.js'),
    fs: require('fs'),
    mongoDBH : (function(){
       if (appConfig.enableMongo) return require('./mongoHandler.js');
     }())
};