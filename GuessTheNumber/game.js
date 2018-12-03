// create secret number
var secretNumber = 4;
//ask user for number
var guess = Number(prompt("Guess a Number"));
//check guess
if((guess)===secretNumber){
    alert("You got it right");
}
else if((guess)>secretNumber){
    alert("Too high");
}
else if((guess)<secretNumber){
    alert("Too Low");
}
else{
    alert("Not a Number");
}