var mongoose  = require("./connection");
var seedData  = require("./seeds");

// var Video = mongoose.model("Video");

var Video = mongoose.model("Video");
Video.remove({}).then(function(){
  Video.collection.insert(seedData).then(function(){
    process.exit();
  });
});
