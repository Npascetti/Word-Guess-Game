//Keyboard code goes here.


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed and stores it to a variable userPress.
var userPress = event.key.toLowerCase();


//Write userPress to the console for testing.
console.log(userPress);
//This is a method that displays the keys you have pressed.
document.getElementById("guessarea").innerHTML = (userPress);}
//Global variables go here.

//Game object goes here.
var Hangman = {
    "real name": "Hangman",
    function: makePlatforms()
    
    
    
}
//Creates a function that makes the guess platforms.


function makePlatforms(){
var par = document.createElement("p");
var platform = document.createTextNode("_ ");
par.appendChild(platform);
document.body.appendChild(par);
}

//iterate creation of guess platforms.
for (i = 0; i < 4; i++) {
makePlatforms();
}



//Calls go here.
