/**
 *  MVCPillar: A simple mvc structure using nodejs
 *  Filename : customerController.js
 *  Purpose  : Handling various incoming user requests (Web or as api hit)
 *  @author  : VS
 */
'use strict';
var appController = require('./appController.js');
class customerController extends appController {
    constructor(data) {
        super(data);
        this.model=this.loadModel('customer');
    }
    
    /**
     * welcome - loads welcome screen
     * @returns {undefined}
     */
    welcome() {
        var controllerData = 'Controller loaded successfully. Path: app/controllers/customerController';
        var modelData=this.model.loadWelcomeData();
        var viewData = {data1:controllerData,data2:modelData,request:this.request};
        this.loadView('welcome',viewData);
    }
}
module.exports = customerController;

