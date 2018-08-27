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
    //array of countries

    //function to randomly select an element out of an array


    
    
    
}
//Creates a function that makes the guess platforms.


function makePlatforms(){
var selectedCountry = "Zimbabwe";
//indicates variable gallows is a string.
var gallows = "";
var par = document.createElement("p");
for (i = 0; i < selectedCountry.length; i++) {
    gallows += "_ "
}
var platform = document.createTextNode(gallows);
par.appendChild(platform);
document.body.appendChild(par);
}

//iterate creation of guess platforms.




//Calls go here.
