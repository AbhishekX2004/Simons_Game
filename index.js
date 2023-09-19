$(".btn-game").on("click",function(){
    window.location = "./gamePage.html";
})

$(".btn-rules").on("click",function(){
    window.location = "./rules.html";
})

setInterval(function(){
    $(".box").fadeOut(2500).fadeIn(2000);
},0);

