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
        var controllerData = 'Customer Controller loaded Sucessfully';
        var weclome=this.model.loadWelcomeData();
        var viewData = {controllerData:controllerData,modelData:weclome,requestDetails:this.request};
        this.loadView('welcome',viewData);
    }
}
module.exports = customerController;

