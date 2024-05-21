const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const { stringify } = require("querystring");

//server connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/loginDetail");
}

var contactSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
  },
  Password: {
    type: Number,
    required: [true, "Password is required"],
    trim: true,
    unique: true,
  },
});
var Contact = mongoose.model("logindetail", contactSchema);

//Express specific stuff
app.use(bodyparser.json());
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));

//Pug specific stuff
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//Endpoints
app.get("/", (req, res) => {
  res.status(200).render("home.pug");
});
app.get("/login", (req, res) => {
  res.status(200).render("login.pug");
});
app.get("/playlists", (req, res) => {
  res.status(200).render("playlist.pug");
});

app.post("/", (req, res) => {
  var myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.status(200).render("home.pug");
    })
    .catch(() => {
      res.status(400).send("not Saved");
    });
});

//listening
app.listen(80, () => {
  console.log("server is live");
});
