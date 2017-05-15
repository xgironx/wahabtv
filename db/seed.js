var mongoose  = require("./connection");
var seedData  = require("./seeds");

var vVideoModel = mongoose.model("Video");

vVideoModel.remove({}).then(function(){
  vVideoModel.collection.insert(seedData).then(function(){
    process.exit();
  });
});
