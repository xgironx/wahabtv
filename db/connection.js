var mongoose  = require("mongoose");

var VideoSchema = new mongoose.Schema(
  {
      name: String,
      url: String,
    order_of_play: Number
    ,created_at: { type: Date, default: Date.now}
    ,created_by: String
    ,updated_at: { type: Date, default: Date.now}
    ,updated_by: String
}
);

mongoose.model("Video", VideoSchema);
mongoose.connect("mongodb://localhost/wahabtv");
// mongoose.connect("mongodb://localhost/wahabtv");

module.exports = mongoose;

                // > use wahabtv
                // switched to db wahabtv
                // > show collections;
                // fs.chunks
                // system.indexes
                // fs.files
                // videos
                // > db.videos.find();
                // { "_id" : ObjectId("5919da00af907bee498d3333"), "name" : "Caballera y Cotton @ GSF 201703251702L ", "url" : "https://youtu.be/n6d1LTiAD0w", "order_of_play" : 11, "created_at" : "", "created_by" : "", "updated_at" : "", "updated_by" : "" }
                // { "_id" : ObjectId("5919da00af907bee498d3334"), "name" : "Caballera y Greystone @ GSF 201510111111L", "url" : "https://youtu.be/vQfguT2SI84?t=41s", "order_of_play" : 99999999999, "created_at" : null, "created_by" : "", "updated_at" : null, "updated_by" : "" }
                // { "_id" : ObjectId("5919da00af907bee498d3335"), "name" : "Caballera y Cotton @ Jens 201611281111L", "url" : "https://youtu.be/B0gxIILmb4s", "order_of_play" : 33, "created_at" : "", "created_by" : "", "updated_at" : "", "updated_by" : "" }
                // { "_id" : ObjectId("5919da00af907bee498d3336"), "name" : "Jim ", "url" : "https://youtu.be/B0gxIILmb4s", "order_of_play" : 44, "created_at" : "", "created_by" : "", "updated_at" : "", "updated_by" : "" }
                // { "_id" : ObjectId("5919de0ab81c4eff320de1c6"), "name" : "1111111111", "url" : "111111111", "order_of_play" : 11111111, "updated_at" : ISODate("2017-05-15T16:57:46.551Z"), "created_at" : ISODate("2017-05-15T16:57:46.551Z"), "__v" : 0 }
                // { "_id" : ObjectId("5919e5ec7ac19226a0cf3503"), "name" : "xx", "url" : "x", "order_of_play" : 1, "updated_at" : ISODate("2017-05-15T17:31:24.929Z"), "created_at" : ISODate("2017-05-15T17:31:24.929Z"), "__v" : 0 }
                // { "_id" : ObjectId("591a1a5442a05277dd2aa52a"), "name" : "SDF", "url" : "SDA", "order_of_play" : 1, "updated_at" : ISODate("2017-05-15T21:15:00.267Z"), "created_at" : ISODate("2017-05-15T21:15:00.267Z"), "__v" : 0 }
                // >
