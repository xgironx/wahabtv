var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose= require("./db/connection");

var app     = express();

var Video = mongoose.model("Video");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

app.get("/api/videos",          function(req, res){ Video.find({}).then(function(videos){ res.json(videos) }); });

app.get("/api/videos/:name",    function(req, res){ Video.findOne({name: req.params.name}).then(function(video){ res.json(video) }); });

app.post("/api/videos",         function(req, res){ Video.create(req.body).then(function(video){ res.json(video) }) });

app.delete("/api/videos/:name", function(req, res){ Video.findOneAndRemove({name: req.params.name}).then(function(){ res.json({ success: true }) }); });

app.put("/api/videos/:name",    function(req, res){ Video.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(function(video){ res.json(video) }); });


app.get("/*",                   function(req, res){ res.render("videos"); });

app.listen(app.get("port"),     function(){ console.log("It's aliiive!"); });
