const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const path = require("path");
const request = require("request");

// HERE: Enviroment Constants
const public = path.join(__dirname, "../../public");

// HERE: Setting up the middleware for static files
router.use(express.static(public));

// HERE: Securiies
const sec = require("../../setup/securities");

// HERE: Importing Database
const Thirak = require("../../models/Thirak");
const Buddhi = require("../../models/Buddhi");
const Brainmine = require("../../models/Brainmine");
const Fantasyipl = require("../../models/fantasyipl");
const Pubg = require("../../models/pubg");
const Cubg = require("../../models/Cubg");
const MadforCad = require("../../models/Madforcad");
const Performer = require("../../models/performer");
const Letstiktok = require("../../models/Letstiktok");
const CodeDecode = require("../../models/codedecode");
const Admad = require("../../models/Admadshow");
const GameofSeries = require("../../models/GameofSeries");
const Robocross = require("../../models/Robocross");
const Cargomania = require("../../models/Cargomania");
const Hackbizz = require("../../models/Hackbizz");

const EventList = require("../../Events");

//@type     GET
//@route    /event/registration
//@desc     for events registartion
//@access   PUBLIC
router.get("/", (req, res) => {
  res.redirect("/events");
});
//@type     GET
//@route    /event/registration
//@desc     for events registartion
//@access   PUBLIC
router.get("/registration", (req, res) => {
  res.render("event", { EventList });
});
//@type     GET
//@route    /event/registration/thirak
//@desc     for events registartion
//@access   PUBLIC
router.post("/registration/thirak", (req, res) => {
  console.log(req.body)
  const newregister = new Thirak();
  newregister.category = req.body.category;
  newregister.name = req.body.name;
  newregister.collg_name = req.body.collg_name;
  newregister.participants = req.body.participants;
  newregister.contact = req.body.contact;
  newregister.email = req.body.email;

  newregister
    .save()
    .then(receipt =>  res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});

//@type     GET
//@route    /event/registration/buddhi
//@desc     for events registartion
//@access   PUBLIC
router.post("/registration/buddhi", (req, res) => {
  console.log(req.body)
  
      const newregister = new Buddhi();
      newregister.year = req.body.year;
      newregister.name = req.body.name;
      newregister.collg_name = req.body.collg_name;
      newregister.branch = req.body.branch;
      newregister.contact = req.body.contact;
      newregister.email = req.body.email;

      newregister
        .save()
        .then(receipt =>
          res.render("form/Successfull")
        )
        .catch(err => {
          console.log("Error in registering user: " + err);
          console.log(req.body)

          res.render("form/error")
        });
    }
  );



//@type     GET
//@route    /event/registration/brainmine
//@desc     for events registartion
//@access   PUBLIC
router.post("/registration/brainmine", (req, res) => {
  console.log(req.body)
  
  const newregister = new Brainmine();
  newregister.player1 = {};
  newregister.player2 = {};
  newregister.paytm = {};
  newregister.player1.name = req.body.player1_name;
  newregister.player2.name = req.body.player2_name;
  newregister.player1.email = req.body.player1_email;
  newregister.player2.email = req.body.player2_email;
  newregister.player1.contact = req.body.player1_mobile;
  newregister.player2.contact = req.body.player2_mobile;
  newregister.player1.branch = req.body.player1_branch;
  newregister.player2.branch = req.body.player2_branch;
  newregister.player2.year = req.body.player2_year;
  newregister.player1.year = req.body.player1_year;
  newregister.player2.year = req.body.player2_year;
  newregister.paytm.name = req.body.paytm_name;
  newregister.paytm.number = req.body.paytm_number;
  newregister.paytm.transid = req.body.paytm_transid;


  newregister
    .save()
    .then(receipt =>  res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
        
      });
    });
});
router.post("/registration/fantasyipl", (req, res) => {
  console.log(req.body)
  
  const newregister = new Fantasyipl();
  newregister.college=req.body.college;
  newregister.player1 = {};
  newregister.player2 = {};
  newregister.player3 = {};
  newregister.paytm = {};
  newregister.player1.name = req.body.player1_name;
  newregister.player2.name = req.body.player2_name;
  newregister.player3.name = req.body.player3_name;
  newregister.player1.email = req.body.player1_email;
  newregister.player2.email = req.body.player2_email;
  newregister.player3.email = req.body.player3_email;
  newregister.player1.contact = req.body.player1_mobile;
  newregister.player2.contact = req.body.player2_mobile;
  newregister.player3.contact = req.body.player3_mobile;
  newregister.paytm.number = req.body.paytm_number;
  newregister.paytm.name = req.body.paytm_name;
  newregister.paytm.transid = req.body.paytm_transid;
  


  newregister
    .save()
    .then(receipt =>  res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});
router.post("/registration/pubg", (req, res) => {
  
  console.log(req.body) 
   const newregister = new Pubg();
  newregister.college=req.body.college;
  newregister.player1 = {};
  newregister.player2 = {};
  newregister.player3 = {};
  newregister.player4 = {};
  newregister.paytm = {};
  newregister.player1.name = req.body.player1_name;
  newregister.player1.email = req.body.player1_email;
  newregister.player1.contact = req.body.player1_mobile;
  newregister.player1.pubguser = req.body.player1_username;
  newregister.player2.name = req.body.player2_name;
  newregister.player2.contact = req.body.player2_mobile;
  newregister.player2.pubguser = req.body.player2_username;
  newregister.player3.name = req.body.player3_name;
  newregister.player3.contact = req.body.player3_mobile;
  newregister.player3.pubguser = req.body.player3_username;
  newregister.player4.name = req.body.player4_name;
  newregister.player4.contact = req.body.player4_mobile;
  newregister.player4.pubguser = req.body.player4_username;
  newregister.paytm.number = req.body.paytm_number;
  newregister.paytm.name = req.body.paytm_name;
  newregister.paytm.transid = req.body.paytm_transid;
  


  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});

router.post("/registration/robocross", (req, res) => {
  
  console.log(req.body) 
   const newregister = new Robocross();
  newregister.college=req.body.college;
  newregister.player1 = {};
  newregister.player2 = {};
  newregister.player3 = {};
  newregister.player4 = {};
  newregister.paytm = {};
  newregister.college = req.body.player1_college;
  newregister.player1.name = req.body.player1_name;
  newregister.player1.email = req.body.player1_email;
  newregister.player1.contact = req.body.player1_mobile;
  newregister.player2.name = req.body.player2_name;
  newregister.player2.contact = req.body.player2_contact;
  newregister.player2.email = req.body.player2_email;
  newregister.player3.name = req.body.player3_name;
  newregister.player3.contact = req.body.player3_contact;
  newregister.player3.email = req.body.player3_email;
  newregister.player4.name = req.body.player4_name;
  newregister.player4.contact = req.body.player4_contact;
  newregister.player4.email = req.body.player4_email;
  newregister.paytm.number = req.body.paytm_number;
  newregister.paytm.name = req.body.paytm_name;
  newregister.paytm.transid = req.body.paytm_transid;
  


  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});
router.post("/registration/cargomania", (req, res) => {
  
  console.log(req.body) 
   const newregister = new Cargomania();
  newregister.college=req.body.college;
  newregister.player1 = {};
  newregister.player2 = {};
  newregister.player3 = {};
  newregister.player4 = {};
  newregister.paytm = {};
  newregister.college = req.body.player1_college;
  newregister.player1.name = req.body.player1_name;
  newregister.player1.email = req.body.player1_email;
  newregister.player1.contact = req.body.player1_mobile;
  newregister.player2.name = req.body.player2_name;
  newregister.player2.contact = req.body.player2_contact;
  newregister.player2.email = req.body.player2_email;
  newregister.player3.name = req.body.player3_name;
  newregister.player3.contact = req.body.player3_contact;
  newregister.player3.email = req.body.player3_email;
  newregister.player4.name = req.body.player4_name;
  newregister.player4.contact = req.body.player4_contact;
  newregister.player4.email = req.body.player4_email;
  newregister.paytm.number = req.body.paytm_number;
  newregister.paytm.name = req.body.paytm_name;
  newregister.paytm.transid = req.body.paytm_transid;
  


  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});
router.post("/registration/hackbizz", (req, res) => {
  
  console.log(req.body) 
   const newregister = new Hackbizz();
  newregister.collg_name = req.body.college;
  newregister.name = req.body.name;
  newregister.email = req.body.email;
  newregister.contact = req.body.mobile;
  newregister.paytm.number = req.body.paytm_number;
  newregister.paytm.name = req.body.paytm_name;
  newregister.paytm.transid = req.body.paytm_transid;
  


  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});
router.post("/registration/cubg", (req, res) => {
  
  console.log(req.body) 
   const newregister = new Cubg();
  newregister.player1 = {};
  newregister.player2 = {};
  newregister.paytm = {};
  newregister.college= req.body.college;
  newregister.player1.name = req.body.player1_name;
  newregister.player1.email = req.body.player1_email;
  newregister.player1.contact = req.body.player1_mobile;
  newregister.player1.branch = req.body.player1_branch;
  newregister.player1.year = req.body.player1_year;
  newregister.player2.name = req.body.player2_name;
  newregister.player2.contact = req.body.player2_mobile;
  newregister.player2.email = req.body.player2_email;
  newregister.player2.branch = req.body.player2_branch;
  newregister.paytm.number = req.body.paytm_number;
  newregister.paytm.name = req.body.paytm_name;
  newregister.paytm.transid = req.body.paytm_transid;
  


  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});

// AD MAD SHOW
router.post("/registration/admadshow", (req, res) => {
  
  console.log(req.body) 
   const newregister = new Admad();
  newregister.college=req.body.college;
  newregister.player1 = {};
  newregister.player2 = {};
  newregister.player3 = {};
  newregister.player4 = {};
  newregister.player5 = {};
  newregister.player1.name = req.body.player1_name;
  newregister.player1.email = req.body.player1_email;
  newregister.player1.contact = req.body.player1_mobile;
  newregister.player1.branch = req.body.player1_branch;
  newregister.player1.college = req.body.player1_college;
  newregister.player2.name = req.body.player2_name;
  newregister.player2.email = req.body.player2_email;
  newregister.player2.contact = req.body.player2_mobile;
  newregister.player3.name = req.body.player3_name;
  newregister.player3.email = req.body.player3_email;
  newregister.player3.contact = req.body.player3_mobile;
  newregister.player4.name = req.body.player4_name;
  newregister.player4.email = req.body.player4_email;
  newregister.player4.contact = req.body.player4_mobile;
  newregister.player5.name = req.body.player5_name;
  newregister.player5.email = req.body.player5_email;
  newregister.player5.contact = req.body.player5_mobile;
  


  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});


// AD MAD SHOW
router.post("/registration/admadshow", (req, res) => {
  
  console.log(req.body) 
   const newregister = new Admad();
  newregister.college=req.body.college;
  newregister.player1 = {};
  newregister.player2 = {};
  newregister.player3 = {};
  newregister.player4 = {};
  newregister.player5 = {};
  newregister.player1.name = req.body.player1_name;
  newregister.player1.email = req.body.player1_email;
  newregister.player1.contact = req.body.player1_mobile;
  newregister.player1.branch = req.body.player1_branch;
  newregister.player1.college = req.body.player1_college;
  newregister.player2.name = req.body.player2_name;
  newregister.player2.email = req.body.player2_email;
  newregister.player2.contact = req.body.player2_mobile;
  newregister.player3.name = req.body.player3_name;
  newregister.player3.email = req.body.player3_email;
  newregister.player3.contact = req.body.player3_mobile;
  newregister.player4.name = req.body.player4_name;
  newregister.player4.email = req.body.player4_email;
  newregister.player4.contact = req.body.player4_mobile;
  newregister.player5.name = req.body.player5_name;
  newregister.player5.email = req.body.player5_email;
  newregister.player5.contact = req.body.player5_mobile;
  


  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});
router.post("/registration/codedecode", (req, res) => {
  
  console.log(req.body) 
   const newregister = new CodeDecode();
  
  newregister.paytm = {};
  newregister.name = req.body.name;
  newregister.branch = req.body.branch;
  newregister.collg_name = req.body.collg_name;
  newregister.email = req.body.email;
  newregister.contact = req.body.contact;
  newregister.paytm.number = req.body.paytm_number;
  newregister.paytm.name = req.body.paytm_name;
  newregister.paytm.transid = req.body.paytm_transid;
  


  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});




router.post("/registration/madforcad", (req, res) => {
  console.log(req.body);
  const newregister = new MadforCad();
  newregister.name = req.body.name;
  newregister.branch = req.body.branch;
  newregister.collg_name = req.body.collg_name;
  newregister.contact = req.body.contact;
  newregister.email = req.body.email;
  

  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.json({
        error: "Retry"
      });
    });
});

// HERE: LETS TIKTOK
router.post("/registration/letstiktok", (req, res) => {
  console.log(req.body);
  const newregister = new Letstiktok();
  newregister.name = req.body.name;
  newregister.branch = req.body.branch;
  newregister.collg_name = req.body.collg_name;
  newregister.contact = req.body.contact;
  newregister.email = req.body.email;
  newregister.tiktok = req.body.tiktok;
  newregister.category = req.body.category;
  

  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.render("form/error")
    });
});


router.post("/registration/performer", (req, res) => {
  console.log(req.body);
  const newregister = new Performer();
  newregister.name = req.body.name;
  newregister.branch = req.body.branch;
  newregister.collg_name = req.body.collg_name;
  newregister.contact = req.body.contact;
  newregister.email = req.body.email;
  

  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.render("form/error")
    });
});


router.post("/registration/gameofseries", (req, res) => {
  console.log(req.body);
  const newregister = new GameofSeries();
  newregister.name = req.body.name;
  newregister.branch = req.body.branch;
  newregister.collg_name = req.body.collg_name;
  newregister.contact = req.body.contact;
  newregister.email = req.body.email;
  newregister.year = req.body.year;
  

  newregister
    .save()
    .then(receipt => res.render("form/Successfull"))
    .catch(err => {
      console.log("Error in registering user: " + err);
      console.log(req.body)
      res.render("form/error")
    });
});
router.get('/form/:name',(req,res)=>{
  res.render('form/'+req.params.name)
})

module.exports = router;
