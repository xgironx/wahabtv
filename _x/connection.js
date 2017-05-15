var mongoose  = require("mongoose");

var VideoSchema = new mongoose.Schema(
  {
    name: String,
    url: String,
    order_of_play: Number
  }
);

mongoose.model("Video", VideoSchema);
mongoose.connect("mongodb://localhost/wahabtv");
                                                // THIS CREATES THE MONGODB DBS AND THEN CREATED THE TABLE video PLURAL as videos> use wahabtv
                                                // switched to db wahabtv
                                                // > show tables;
                                                // system.indexes
                                                // videos
                                                // > db.videos.find();
                                                // { "_id" : ObjectId("5918aa3225dbf83b31d04496"), "name" : "EVS & Cotton @ GSF 201703251702L", "url" : "https://youtu.be/n6d1LTiAD0w", "order_of_play" : 11 }
                                                // { "_id" : ObjectId("5918aa3225dbf83b31d04497"), "name" : "Caballera y Greystone @ GSF 201510111111L", "url" : "https://youtu.be/vQfguT2SI84?t=41s", "order_of_play" : 22 }
                                                // >

module.exports = mongoose;
