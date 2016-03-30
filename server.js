var app = require('express')();
var http = require('http').Server(app);
var Firebase = require("firebase");

var myFirebaseRef = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/test', function(req, res){

    myFirebaseRef.child("bruhathkayosaurus").on("value", function(snapshot) {
        console.log(snapshot.val());  // Alerts "San Francisco"
        res.end( JSON.stringify(snapshot.val()));
    });

    // res.end( JSON.stringify([]));

})

http.listen(3001, function(){
    console.log('listening on *:3001');
});