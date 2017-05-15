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
