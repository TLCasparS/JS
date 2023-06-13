document;

var amount = document.querySelectorAll(".drum").length;
var audio = new Audio("./sounds/tom-1.mp3");


for(var i = 0; i <amount; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
        var buttoninner = this.innerHTML;
        makeSound(buttoninner);
        buttonAnimate(buttoninner);
        
 
       
    });
   
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimate(event.key);
    });


function Drums(loc){
    this.loc = loc;
    this.play = function(){
        audio = new Audio(loc);
        audio.play();
    }
}

function makeSound(key){
    switch(key){
        case "w":
            w = new Drums("./sounds/tom-1.mp3");
            w.play();
        break;

        case "a":
            a = new Drums("./sounds/tom-2.mp3");
            a.play();
        break;

        case "d":
            d = new Drums("./sounds/tom-2.mp3");
            d.play();
        break;

        case "s":
            s = new Drums("./sounds/tom-4.mp3");
            s.play();
        break;

        case "k":
            k = new Drums("./sounds/snare.mp3");
            k.play();
        break;

        case "j":
            j = new Drums("./sounds/kick-bass.mp3");
            j.play(); 
        break;  

        case "l":
            l = new Drums("./sounds/crash.mp3");
            l.play();  
        break;  

        default:
            
        }

}

function buttonAnimate(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function()
    {
        activeButton.classList.toggle("pressed");
    } , 100);
      
    
    
    
    


}

