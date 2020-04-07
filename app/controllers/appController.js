/**
 * MVCPillar: A simple mvc structure using nodejs
 * Filename : appController.js
 * Purpose  : File serves as base controller
 * @author  : VS
 */
'use strict';
var appRoot = require('app-root-path');
var modules = require(appRoot.path+'/core/modulesLoader.js');
class appController {
    constructor(data = {}){
        this.request = data;
    }
    /**
     * loadModel - Loads given model into controller
     * @param {type} model
     * @returns modelObj
     */
    loadModel(model){
        var loadModel = require(modules.appConstants.MODELS_PATH + '/' + model + 'Model.js');
        var modelObj = new loadModel();
        return modelObj;
    }
    
    /**
     * loadView - View renderer
     * @param {type} view
     * @param {type} data
     * @returns {undefined}
     */
    loadView(view,data) {
        var responseHandler = this.request.resp;
        modules.fs.stat(modules.appConstants.APPVIEWS_PATH + '/' + view + '.pug', function (err) {
            if (!err) {
                responseHandler.render(view, {data:data});
            } else if (err.code === 'ENOENT') {
                responseHandler.render('404', {error: err});
                console.log(err);
            }
        });
    }
}
module.exports = appController;