

for( var i = 0; i <3; i++){
    document.querySelectorAll(".MyButton")[i].addEventListener("click", function(){
       
        var text = this.innerHTML;
        console.log(text);
        playSounds(text);
        Animation2(text);
          
   
   });

}

function playSounds(text){
    switch(text){
        case "A":
            var audio = new Audio("Audio/a.mp3");
            audio.play();
            break;

            case "B":
            var audio = new Audio("Audio/b.mp3");
            audio.play();
            break;

            case "C":
            var audio = new Audio("Audio/c.mp3");
            audio.play();
           
    }
}



function Animation2(text){
    var playanim = document.querySelector("."+text);
    playanim.classList.add("anim2");

    
   
    setTimeout(function(){
        playanim.classList.remove("anim2");
    },1000);

}








   
