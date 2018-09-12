$(document).ready(function(){

var timer = 120;
function countDown(){
    //set decrement for timer
};  
    $("#startButton").on("click", function(){
        $(this).hide();
        countDown();
    })
$("#timer").html(timer)
console.log(timer)

var score = 0;
//pair wrong and right answers with functions

var results = ("You got " + score +"/" + questions.length)

function gameOver(){
    if (timer === 0){
        alert(results)
        }
    else if (submitButton.on(click))
        alert(results)
    };
});