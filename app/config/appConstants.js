/**
 * MVCPillar: A simple mvc structure using nodejs
 * FileName : appConstants.js
 * Purpose  : File contains the core functionality constants
 * @author  : VS
 */
var appRoot = require('app-root-path');
var baseDir = appRoot.path;
module.exports = {
    APPLICATION_PORT: 3000,
    APP_ROOT_PATH: baseDir,
    CONTROLLER_PATH: baseDir + '/app/controllers',
    MODELS_PATH: baseDir + '/app/models',
    APPVIEWS_PATH: baseDir + '/app/views',
    APP_ASSETS_CSS : baseDir+'/public/css',
    APP_ASSETS_JS : baseDir+'/public/jslib'
};