//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello, World!       <a href = '/about'>About Me</a></h1>");
});

app.get("/contact", function(req,res){
    res.send("<h2>Contact me at: <a href = 'srivastava.yash5402@gmail.com'>srivastava.yash5402@gmail.com</a></h2>"); 
});

app.get("/about", function(req,res){
    res.send(index.html);
});

app.listen(3000, function(){
    console.log("Server started on port 3000"); 
});