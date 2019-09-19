const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const request = require("request");

const Event = require("../../models/Events");

// HERE: Enviroment Constants
const public = path.join(__dirname, "../../public");

// HERE: Setting up the middleware for static files
router.use(express.static(public));

// HERE: Securiies
const sec = require("../../setup/securities");

//@type     GET
//@route    /events
//@desc     for events page
//@access   PUBLIC
router.get("/", (req, res) => {
  res.render("events");
});
//@type     GET
//@route    /events/registration
//@desc     for registration of a event
//@access   PUBLIC
router.get("/registration", (req, res) => {
  res.redirect("/event/registration");
});
//@type     POST
//@route    /events/registration
//@desc     for registration of a event and adding to DB
//@access   PUBLIC
router.post("/registration", (req, res) => {
  if (
    req.body.captcha === undefined ||
    req.body.captcha === "" ||
    req.body.captcha === null
  ) {
    return res.json({ "case": "1", "success": false,"err":"Please fill the captcha.." });
  }

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${
    sec.captchakey
  }&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

  // Make request to verify url
  request(verifyUrl, (err, response, body) => {
    body = JSON.parse(body);

    // If not sucucessfull
    if (body.success !== undefined && !body.success) {
      console.log("Unsuccessfull captcha");
      return res.json({ "case": "1", "success": false,"err":"Error in Captcha, please retry..." });

    } else {
      // if successfull
      console.log("Captcha Passed");
      const eventDetails = {};
      eventDetails.studentDetails = {};
      eventDetails.eventDetails = {};
      eventDetails.facultyDetails = {};
      if (req.body.student_name)
        eventDetails.studentDetails.name = req.body.student_name;
      if (req.body.contactNo)
        eventDetails.studentDetails.contactNo = req.body.contactNo;
      if (req.body.sem_bran)
        eventDetails.studentDetails.sem_bran = req.body.sem_bran;
      if (req.body.email) eventDetails.studentDetails.email = req.body.email;

      if (req.body.event_type)
        eventDetails.eventDetails.type = req.body.event_type;
      if (req.body.event_name)
        eventDetails.eventDetails.name = req.body.event_name;
      if (req.body.desc) eventDetails.eventDetails.desc = req.body.desc;
      if (req.body.venue) eventDetails.eventDetails.venue = req.body.venue;
      if (req.body.duration)
        eventDetails.eventDetails.duration = req.body.duration;
      if (req.body.budget) eventDetails.eventDetails.budget = req.body.budget;
      if (req.body.prize) eventDetails.eventDetails.prize = req.body.prize;
      if (req.body.sponsor)
        eventDetails.eventDetails.sponsor = req.body.sponsor;
      if (req.body.sponsor_name)
        eventDetails.eventDetails.sponsor_name = req.body.sponsor_name;
      if (req.body.sponsor_amount)
        eventDetails.eventDetails.sponsor_amount = req.body.sponsor_amount;

      if (req.body.faculty_name)
        eventDetails.facultyDetails.faculty_name = req.body.faculty_name;
      if (req.body.faculty_dep)
        eventDetails.facultyDetails.faculty_dep = req.body.faculty_dep;
      if (req.body.faculty_contact)
        eventDetails.facultyDetails.faculty_contact = req.body.faculty_contact;

      new Event(eventDetails)
        .save()
        .then(profile => {
          console.log("Data Saved");
          // res.redirect(301,"./" + profile._id);
          res.json({ "case": "3", "success": true,"redirect":("./" + profile._id) })

        })
        .catch(err =>
          console.log("Error in savingevent registration data: " + err)
        );
    }
  });
});
//@type     POST
//@route    /events/registration
//@desc     for registration of a event and adding to DB
//@access   PUBLIC
router.get("/:id", (req, res) => {
  Event.findOne({ _id: req.params.id })
    .then(event => {
      if (event) res.render("eve-reg-confirm", { profile: event });
      else res.render("404");
    })
    .catch(err => {
      console.log("Error in getting data in database: ", err);
      res.render("404");
    });
});

module.exports = router;
