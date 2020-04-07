/**
 *  MVCPillar: A simple mvc structure using nodejs
 *  Filename : routeHandler.js
 *  Purpose  : Handling various incoming user requests (Web or as api hit)
 *  @author  : VS
 */
'use strict';
var fs = require('fs');
var appRoutes = require('../app/config/appRoutes.js');
const appConstants = require('../app/config/appConstants.js');
const coreErrors = require('./coreErrors.js');
class routesHandler {
    constructor() {
        this.appRoutesKeys = {};
        if (typeof appRoutes !== 'undefined' && Object.keys(appRoutes).length > 0) {
            var routeKeys = Object.keys(appRoutes);
            this.appRoutesKeys = routeKeys;
        }
        this.request = {};
        this.response = {};
        this.urlObj = {};
    }
    /**
     * handleRequests - Main route handler
     * @param {type} req
     * @param {type} resp
     * @returns {undefined}
     */
    handleRequests(req, resp) {
        this.setReqResp(req, resp);
        this.setUrlObject();
        this.validateRequest();
    }
   
    /**
     * setReqResp - Sets request and response
     * @param {type} req
     * @param {type} resp
     * @returns {undefined}
     */
    setReqResp(req, resp) {
        this.request = req;
        this.response = resp;
    }
    
    /**
     * setUrlObject - creates and sets url related information
     * @returns {undefined}
     */
    setUrlObject() {
        var obj = {
            protocol: this.request.protocol,
            path: this.request.path,
            query: this.request.query
        };
        this.urlObj = obj;
    }
    /**
     * validateRequest - Request validator and renderer
     * @returns {undefined}
     */
    validateRequest() {
        var urlPath = this.urlObj.path; 
        if(urlPath.charAt(0)==='/'){
            urlPath = urlPath.substr(1); 
        }
        if (this.appRoutesKeys.includes(urlPath)) {
            var completeRoute = appRoutes[urlPath];
            if (typeof completeRoute !== 'undefined' && completeRoute !== null) {
                var controller = Object.keys(completeRoute)[0]; // controller
                var method = completeRoute[Object.keys(completeRoute)[0]]; //action
                var scopeHanler = this;
                if (typeof method === 'undefined' || method === null) {
                    method = "index"; // Default method
                }
                var requestData = {
                    type: this.request.method,
                    path: urlPath,
                    controller: controller,
                    method: method,
                    query: this.urlObj.query,
                    headers: this.request.headers,
                    body: this.request.body,
                    resp: this.response
                };
                // Check if controller File exists
                fs.stat(appConstants.CONTROLLER_PATH + '/' + controller + 'Controller.js', function (err) {
                    if (!err) {
                        scopeHanler.loadController(controller, method, requestData);
                    } else if (err.code === 'ENOENT') {
                        scopeHanler.response.render('404', {error: err});
                        console.log(err);
                    }
                });
            } else {
                // Route defination missing error
                console.log(coreErrors.ROUTE_EMPTY + urlPath);
                this.response.render('404', {error: coreErrors.ROUTE_EMPTY +' : '+ urlPath});
            }
        } else {
            // Route Not found error
            console.log(coreErrors.ROUTE_MISSING + urlPath);
            this.response.render('404', {error: coreErrors.ROUTE_MISSING +' : '+ urlPath});
        }

    }
    /**
     * loadController : Includes requested controller and call its methods
     * @param {type} controller
     * @param {type} method
     * @param {type} setData
     * @returns {undefined}
     */
    loadController(controller, method, setData) {
        var loadController = require(appConstants.CONTROLLER_PATH + '/' + controller + 'Controller.js');
        var controllerObj = new loadController(setData);
        controllerObj[method]();
    }
}
module.exports = new routesHandler;
