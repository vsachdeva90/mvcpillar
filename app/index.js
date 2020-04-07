/**
 *  MVCPillar: A simple mvc structure using nodejs
 *  FileName : index.js
 *  Purpose  : File serves loading required modules and handling routes
 *  @author  : VS
 */
'use strict';
var modules = require('../core/modulesLoader.js');
var app = modules.express();
app.use(modules.bodyParser.json()); // to support JSON-encoded bodies
app.use(modules.bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies
var http = modules.http.Server(app);

app.use(modules.express.static(modules.appConstants.APP_ASSETS_CSS));
app.use(modules.express.static(modules.appConstants.APP_ASSETS_JS));
// Handle Incoming Requests

app.use('/', function (req, resp) {
    modules.routes.handleRequests(req, resp);
});

// Default View directories where template files are located
app.set('views', [__dirname + '/views', __dirname + '/../core/templates']);
app.set('view engine', 'pug');

http.listen(modules.appConstants.APPLICATION_PORT, () => {
    console.log('app listening on port ' + modules.appConstants.APPLICATION_PORT + '!');
});