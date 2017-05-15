var mongoose  = require("mongoose");

var VideoSchema = new mongoose.Schema(
  {
     name: String
    ,url: String
    ,order_of_play: Number
    ,created_at: { type: Date, default: Date.now}
    ,created_by: String
    ,updated_at: { type: Date, default: Date.now}
    ,updated_by: String
}
);

                                                // $ mongo ds143211.mlab.com:43211/heroku_2lg0r3jz -uxgironx -pxgironx#1
                                                // $ mongo ds143211.mlab.com:43211/heroku_2lg0r3jz -uheroku_2lg0r3jz -p pc3ovpqacvjur8c7sah0r8ehpm
        // 201705151723L   EL LUNES   GIRO
        // CHOOSES WH MONGO INSTANCE TO WRITE TO
        // JUST CHOSE TO WRITE LOCAL TO LOCAL
                                        // { "_id" : ObjectId("591a1a5442a05277dd2aa52a"), "name" : "SDF", "url" : "SDA", "order_of_play" : 1e+23, "updated_at" : ISODate("2017-05-15T21:15:00.267Z"), "created_at" : ISODate("2017-05-15T21:15:00.267Z"), "__v" : 0 }
// mongoose.model("Video", VideoSchema);
// if(process.env.NODE_ENV == "production"){  mongoose.connect(process.env.MONGOLAB_URI);}else{  mongoose.connect("mongodb://localhost/wahabtv");}
// module.exports = mongoose;
// --------------------------------------------------

        // WRITES TO CLOUD MLAB MONGOLAB INSTANCE
        // JUST WROTE TO CLOUD MONGOLAB INSTANCE
                                        // { "_id" : ObjectId("591a1bd6c9d9227d13b67b13"), "name" : "55555", "url" : "55555", "order_of_play" : 55555, "updated_at" : ISODate("2017-05-15T21:21:26.511Z"), "created_at" : ISODate("2017-05-15T21:21:26.511Z"), "__v" : 0 }
                                        // rs-ds143211:PRIMARY>
mongoose.model("Video", VideoSchema);
        // mongoose.connect(process.env.MONGOLAB_URI)
mongoose.connect("mongodb://heroku_2lg0r3jz:pc3ovpqacvjur8c7sah0r8ehpm@ds143211.mlab.com:43211/heroku_2lg0r3jz")
module.exports = mongoose;
// --------------------------------------------------


        // WRITES TO LOCALMACHINE MONGODB INSTANCE
        // JUST WROTE TO LOCALMACHINE
                                        // { "_id" : ObjectId("591a1a5442a05277dd2aa52a"), "name" : "SDF", "url" : "SDA", "order_of_play" : 1, "updated_at" : ISODate("2017-05-15T21:15:00.267Z"), "created_at" : ISODate("2017-05-15T21:15:00.267Z"), "__v" : 0 }
// mongoose.model("Video", VideoSchema);
// mongoose.connect("mongodb://localhost/wahabtv");
// module.exports = mongoose;
// --------------------------------------------------
