//==========================================
// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also 
// be used to handle the compatibility logic.
//==========================================
//load data
var friends = require("../data/friends.js");

//Routing
module.exports = function(app){
// display a JSON of all possible friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var addFriend = req.body;
        
            for(var i = 0; i < addFriend.scores.length; i++) {
                addFriend.scores[i] = parseInt(addFriend.scores[i]);
              }

        var startFriend = 0;
        var minDifference = [];

    // start the loop
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(addFriend.scores[j] - friends[i].scores[j]);
        totalDifference += difference;

      }

      // set the minimum 
      if(totalDifference < minDifference) {
        startFriend = i;
        minDifference = totalDifference;
      }
    }
    // push the new friend
    friends.push(addFriend);
    // back to browser 
    res.json(friends[startFriend]);

    });

}