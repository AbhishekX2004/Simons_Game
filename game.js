//sounds
var sounds = ["./sounds/red.mp3","./sounds/blue.mp3","./sounds/green.mp3","./sounds/yellow.mp3","./sounds/wrong.mp3"]

//colors
var buttonColors = ["red", "blue", "green", "yellow"];

//pattern
var gamePattern = [];
var chosenPattern = [];

//random number generator 0 - 3
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

//blinker and audio player
function blink(color){
    switch (color) {
        case "red":
            $("#red.btn").fadeOut(250).fadeIn(250);
            var audio=new Audio(sounds[0]);
            audio.play();
            break;
        case "blue":
            $("#blue.btn").fadeOut(250).fadeIn(250);
            var audio=new Audio(sounds[1]);
            audio.play();
            break;
        case "green":
            $("#green.btn").fadeOut(250).fadeIn(250);
            var audio=new Audio(sounds[2]);
            audio.play();
            break;
        case "yellow":
            $("#yellow.btn").fadeOut(250).fadeIn(250);
            var audio=new Audio(sounds[3]);
            audio.play();
            break;
    }
}




//game start
$(document).on("keypress",function(){
    var randomChosenColor = buttonColors[nextSequence()];
    gamePattern.push(randomChosenColor);

    blink(randomChosenColor);

    $(".btn").on("click",function(chosenColor){
        chosenPattern.push();
        blink(chosenColor.target.id);
    })
    
})

