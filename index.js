// HERE: Importing Libraries and Modules
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// HERE: Importing Pravah Team Details
const team = require("./PravahTeam");
const sponsor = require("./Sponsor");

// HERE: Import securities
const securities = require("./setup/securities");

// HERE: Connecting to mongoDB
mongoose
  .connect(securities.dburl, { useNewUrlParser: true })
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log("DataBase connection Error: " + err));

// HERE: Enviroment Constants
const public = path.join(__dirname, "public");
const port = process.env.PORT || 5000;

// HERE: Middleware
app.use(express.static(public));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// # HERE: Setting Up view engine middleware
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// HERE: Bring Routes
const events = require("./routes/public/events");
const event = require("./routes/public/event");

// HERE: Routes

app.get("/", (req, res) => {
  res.render("index");
  // console.log(req.headers)
});
app.get("/contact", (req, res) => {
  res.render("contact", { team: JSON.parse(team) });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/schedule", (req, res) => {
  res.render("schedule");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/sponsor", (req, res) => {
  res.render("sponsor", { sponsor: sponsor });
});
app.get("/team", (req, res) => {
  res.render("team", { team: JSON.parse(team) });
});

// HERE: Setting up middleware routes

app.use("/events", events);
app.use("/event", event);

// HERE: 403 Page Hidden
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => console.log("Server is running on port 3000"));
