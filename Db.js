var databaseUrl = "mongodb://localhost:27017/testdb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");