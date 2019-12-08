//Express dependencies
var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 8080;
var app = express();

//Enabling url parsing
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//Requiring files to handle routes
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

//Starting the server
app.listen(PORT, () =>{
    console.log(`App listening on http://localhost:${PORT}`);
});