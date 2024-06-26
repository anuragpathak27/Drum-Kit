var noofdrumbutton=document.querySelectorAll(".drum").length;

for(var i=0;i<noofdrumbutton;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
  var buttoninnerhtml=this.innerHTML;
  
  makeSound(buttoninnerhtml);

  buttonAnimation(buttoninnerhtml);
});
}

// Detecting keyboard press

document.addEventListener("keydown",function(event){
 makeSound(event.key);

 buttonAnimation(event.key);

})

function makeSound(key){
    switch (key) {
        case "w":
            var tim1 =new Audio('tom-1.mp3');
            tim1.play();
            break;
    
        case "a":
            var tom2 =new Audio('tom-2.mp3');
            tom2.play();
            break; 
            
        case "s":
            var tom3 =new Audio('tom-3.mp3');
            tom3.play();
            break;        
        
        case "d":
            var tom4 =new Audio('tom-4.mp3');
            tom4.play();
            break;    
            
        case "j":
            var snare =new Audio('snare.mp3');
            snare.play();
            break;  
    
        case "k":
            var crash =new Audio('crash.mp3');
            crash.play();
            break;
    
        case "l":
            var kickbass =new Audio('kick-bass.mp3');
            kickbass.play();
            break; 
    
        default:
            console.log(buttoninnerhtml);
            break;
      }
}

function buttonAnimation(currentkey){
    var activeButton= document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}
