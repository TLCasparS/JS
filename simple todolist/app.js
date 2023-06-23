const bodyParser = require("body-parser");
const express = require("express");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

var days = ["sunday", "monday", "tuesday","wednesday", "thursday","friday","Saturday"];
var months = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
var today = new Date();
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
today = days[today.getDay()] +", " +today.getDate() +" " + months[today.getMonth()]; 
var todo = [];
var studytodo = []
app.get("/", function(req, res){
   
    var title = "General tasks"
    //var day = today.toLocaleDateString("de-DE", options);
   
   
    res.render("list", {day: today, todo:todo, listTitle: title});

});

app.post("/", function(req, res){
    
    if (req.body.list === "study"){
        studytodo.push(req.body.do);
        res.redirect("/study");
    }else{;
     todo.push(req.body.do);
     res.redirect("/");
    }
    
    //console.log(todo);

    //res.render("list", {todo:todo, day: today})
    
})


app.get("/study", function(req, res){
   

    //var day = today.toLocaleDateString("de-DE", options);
    var title= "study"
   
    res.render("list", {day: today, todo:studytodo, listTitle: title});

});

app.post("/study", function(req, res){
    
    todo.push(req.body.do);
    
    //console.log(todo);

    //res.render("list", {todo:todo, day: today})
    res.redirect("/study");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});