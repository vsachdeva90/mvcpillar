# mvcpillar
A simple mvc structure using Node js + MongoDB Setup

<h2>Application Structure</h2>
<h3>Folders</h3>
<p><b>app</b>- All application code resides here and it further contains sub folders</p>
<p>
  <p><b>--config</b> -> Place for application configuration and route files</p>
  <p><b>--controllers</b> -> Place for all application controllers</p>
  <p><b>--models</b> -> Place for all application models</p>
  <p><b>--views</b> -> Place for all application views</p>
  </p>
<p><b>core</b>-Core code e.g (System templates,Route handler, Modules loader, Core errors) resides here</p>
<p><b>public</b>- Public assets e.g (Css,Images and Javascript libraries) resides here</p>

<h3>Main Files</h3>
<p>app/index.js -> File for handling incoming user requests.It resides in root of app folder</p>
<p>app/controllers/appController.js - Parent controller for all application controllers</p>
<p>app/models/appModel.js - Parent model for all application models</p>
<p>app/controllers/customerController.js - Demo controller</p>
<p>app/models/customerModel.js - Demo model</p>
<p>app/views/welcome.pug - Demo view</p>
<p>app/config/appRoutes.js- Application routes file- All incoming routes should be define here</p>
<p>app/config/appConstants.js- File containing all application constants</p>
<p>app/config/appConfig.js- File containing all application configs</p>
<p>core/routeHandler.js - Handles application routes functionality</p>
<p>core/modulesLoader.js - File loads all mentioned modules when included</p>
<p>core/coreErrors.js - File contains all core errors</p>
<p>core/templates/404.pug - contains default application templates e.g (404.pug - When request is not found,this views renders)</p>
<p>license.txt - MIT licensed</p>
<p>package.json - File contains all used npm packages</p>
<p>README.md - User Guide file</p>

<h2>How to run it ?</h2>
<p>Well no need to worry. Its quite simple.Just make sure you have Node js installed on your system.</p>
<h3>Steps:</h3>
<p>Download the mvc pillar structure first.</p>
<p>Go to folder directory through terminal.</p>
<p>Run npm install command to install required packages from package.json .</p>
<p>After running npm install, a folder named node_modules will be there.</p>
<p>Now just run node app/index.js command in your application folder. </p>
<p>Hit the url in your web browser http://localhost:3000/user?query=myfirstmvc to see the magic.<p>
<p>A welcome screen will be there.Enjoy the application development.</p>

<h2>How MVC works here?</h2>
<p>When user hits above url. Request goes to index.js first.</p>
<p>Here the route handler comes into operation.In our url route is <b>user</b></p>
<p>It searches for route in app/config/appRoutes.js</p>
<p>In this sample structure, i have already included this route.You can make yours too.</p>
<p>Here you can see "user": {"customer": "welcome"}</p>
<p>If the route exists here then it only processes the request further else it will give 404 error</p>
<p>If you see the value of route. customer will be controller and welcome will be action inside this controller.</p>
<p>Now a file named customerController should be there in app/controllers .</p>
<p>Inside this controller you can also see action named welcome() .</p>
<p>All request data can be seen in the variable this.request </p>
<p>Also you can see the model loaded here.User can load any model.Just go through constructor code.<p>
<p>Also any controller will extend appController, which is a base controller.</p>
<p>Model files should be like customerModel, if we are loading customer Model.</p>
<p>To render any view, just call this.loadView function. It accepts two parameters <b>View name</b> & <b>data to be send to view.</b> </p>
<p>Default template engine used is PUG.</p>

<h2>How to enable Mongo db?</h2>
<p>set enableMongo=1 in app/config/appConfig.js</p>
<p>set mongo connect credentials in app/config/appDatabase.js</p>
<p>If all goes well, you can access mongodb object in app/models/appModel.js in this.db</p>

<h2>Dependencies </h2>
<h3>Following dependencies have been used in mvcpillar package.json.Without these i could not create my first mvc project in Node js. A big thanks :) </h3>
<p>app-root-path - https://www.npmjs.com/package/app-root-path</p>
<p>express - https://www.npmjs.com/package/express </p>
<p>pug- https://www.npmjs.com/package/pug </p>
<p>url - https://www.npmjs.com/package/url </p>
<p>body parser -https://www.npmjs.com/package/body-parser</p>
<p>mongo db - https://www.npmjs.com/package/mongodb</p>
