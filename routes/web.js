const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const submitController = require("../controllers/submit");
const getDataController = require("../controllers/getData");
const loginController = require("../controllers/loginReader");

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://default-user:JgMmIChJd7IoyOJY@cluster0.bdgxr.mongodb.net/on-memory-neurotechnologies?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const readerSchema = new Schema({
  reader: String,
  who: String,
  question1: String,
  question2: String,
  consent: String
});

const Reader = mongoose.model("Reader", readerSchema);

/*
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/user', function (req, res) {
  User.find({}, function(err,users) {
    if(err) {
      res.send("Error")
    }
    res.json(users);
    console.log(users);
  });
})*/

// Reader.find(function(err, readers) {
//   if(err) {
//     console.log(err);
//   }
//   else {
//     console.log(readers);
//   }
// });

let routes = app => {
  router.get("/", homeController.getHome);
  router.post("/login", loginController.loginReader);

  router.post("/submit", submitController.submitAllFeedback);

  router.get('/getdata', homeController.getHome);
  /*
  router.get('/users', function (req, res) {
    User.find({}, function(err,users) {
      if(err) {
        res.send("Error")
      }
      res.json(users);
      console.log(users);
    });
  });
  */
  router.post("/getdata", getDataController.getData);
  router.get("/fetch", function(req,res) {

  })

  return app.use("/", router);
};

module.exports = routes;
