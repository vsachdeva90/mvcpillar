/**
 * MVCPillar: A simple mvc structure using nodejs
 * FileName : appModel.js
 * Purpose  : File serves as base model
 * @author  : VS
 */
'use strict';
var appRoot = require('app-root-path');
var mongoDBH = require(appRoot.path + '/core/modulesLoader.js').mongoDBH;
var appConfig = require(appRoot.path + '/app/config/appConfig.js');
class appModel {
    constructor() {
        // If enableMongo =1 in appConfig, then set mongodb object in this.db
        if (appConfig.enableMongo) {
            this.db = mongoDBH();
        }
        else{
            console.log("Want to work with mongo db? \n\
                        No worries :) \n\
                        Set enableMongo=1 in app/config/appConfig.js\n\
                        Set your mongo credentials in app/config/appDatabase.js");
        }
    }
}
;
module.exports = appModel;