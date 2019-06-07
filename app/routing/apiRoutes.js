//==========================================
// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also 
// be used to handle the compatibility logic.
//==========================================
//load data
var friendsData = require("../data/friends.js");

//Routing
module.exports = function(app){

    app.get("api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("appi/friends", function(req, res){
        var addFriend = req.body;
        friendsData.push(addFriend);
    });

}