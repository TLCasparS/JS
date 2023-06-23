const bodyParser = require("body-parser");
const express = require("express");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

var days = ["sunday", "monday", "tuesday","wednesday", "thursday","friday","Saturday"];
var today = new Date();
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (today.getDate() == 6 || today.getDate() == 0){
    today = days[today.getDay()] +" the " +today.getDate()+ " it is Weekend";
}else{
    today = days[today.getDay()] +" the " +today.getDate()+ " it a is day";
    
}
var todo = [];
app.get("/", function(req, res){
   

    //var day = today.toLocaleDateString("de-DE", options);
   
   
    res.render("list", {day: today, todo:todo});

});

app.post("/", function(req, res){
    
    todo.push(req.body.do);
    
    //console.log(todo);

    //res.render("list", {todo:todo, day: today})
    res.redirect("/");
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
});