var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function(name , password , response) {
db.users.find({"name": name ,"password": password },
    function(err, users) 
    {
        if (err || !users) {
        response.write("Not authorized user");
        response.end();
            } 
        else if (users.length == 0) {
        response.write("Not authorized user");
        response.end();
            } 
        else {
            //window.open('Get_into_software.html');
        
            }
        });
}

exports.saveUser = function(name, email, password, dob, phone, gender, response) {
console.log('Saving user to mongo');
db.users.insert({"name": name,"email": email,"password": password ,"dob": dob ,"phone": phone ,"gender": gender},
function(err, saved) 
{
    if (err || !saved)
        console.log(err);
    else
        response.write("user saved");
        response.end();
});
}



    

