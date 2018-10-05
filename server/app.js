var express = require("express");
var path = require("path");
var app = express();
const port = process.env.PORT || 3000;

//gets js and css files
app.use(express.static(path.resolve( __dirname ,"../static/")));
//get index.html file for main website
app.get("/",function(req,res){
    res.sendFile(path.resolve( __dirname ,"../static/index.html") );
});


//express server listening on port
app.listen(port,function(){
    console.log("app listening on port:" + port);
});