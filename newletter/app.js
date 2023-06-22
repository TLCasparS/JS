const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const https = require("https");
const mailchimp = require('@mailchimp/mailchimp_marketing');

const API = "";
const listId ="" ;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));



mailchimp.setConfig({
  apiKey: API,
  server: "us9"
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/singup.html");

});

app.post("/", function(req, res){

  const fname = req.body.fname;
  const lname = req.body.lname;
  const mail = req.body.mail;

  subscribingUser = {
    firstName: req.body.fname,
    lastName: req.body.lname,
    email: req.body.mail
  };
  console.log(subscribingUser);
  try {
    run();
    res.sendFile(__dirname + "/success.html");
  } catch (error) {
    console.log('Error:', error);
    res.sendFile(__dirname + "/failure.html");
  }

});

async function run() {
  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName
      }
    });

    console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

app.listen(3000, function(){
    console.log("server running on port 3000")

});
