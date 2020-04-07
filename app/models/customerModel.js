/**
 * MVCPillar: A simple mvc structure using nodejs
 * FileName : customerModel.js
 * Purpose  : customer Model
 * @author  : VS
 */
'use strict';
var appModel = require('./appModel.js');
class customerModel extends appModel{
    constructor(){
        super();
    }
    
    loadWelcomeData(){
        var data = 'Model loaded successfully.Path : app/models/customerModel';
        return data;
    }
};
module.exports = customerModel;
