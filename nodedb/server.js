var module = require('./dbmodule');
var http = require('http');
var querystring = require('querystring');
var url= require('url');


http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var name=querystring.parse(data1)["name"];
console.log(name);
var email = querystring.parse(data1)["email"];
console.log(email);
var password = querystring.parse(data1)["password"];
console.log(password);
var dob=querystring.parse(data1)["dob"];
console.log(dob);
var phone=querystring.parse(data1)["phone"];
var gender=querystring.parse(data1)["gender"];


if (request.url === '/login') {
module.authenticateUser(name, password, response);
            } 
else if (request.url === '/save') {
      var path=url.parse(request.url).pathname;
      console.log("request recieved for"+path);
module.saveUser(name, email, password, dob, phone, gender, response);
            } 

      });


    
}).listen(3400);
console.log("Server started");
