//Game object goes here.
var hangMan = {
  //wrongGuessCount is initialized to 0//
  wrongGuessCount: 0,
  //winState is initialized to false//
  winState: false,
  //sets the max allowedGuesses and initializes the remainingGuesses//
  //getAllowedGuesses is called in setupGame//
  //TODO: add to eventlistener to dynamically set allowedGuesses from user input//
  getAllowedGuesses: function(allowedGuesses) {
    this.allowedGuesses = allowedGuesses
    this.remainingGuesses = allowedGuesses;
  },
  //pokemons is a list of 151 pokemon//
  pokemons: ["BULBASAUR", "IVYSAUR", "VENUSAUR", "CHARMANDER", "CHARMELEON", "CHARIZARD", "SQUIRTLE", "WARTORTLE", "BLASTOISE", "CATERPIE", "METAPOD", "BUTTERFREE", "WEEDLE", "KAKUNA", "BEEDRILL", "PIDGEY", "PIDGEOTTO", "PIDGEOT", "RATTATA", "RATICATE", "SPEAROW", "FEAROW", "EKANS", "ARBOK", "PIKACHU", "RAICHU", "SANDSHREW", "SANDSLASH", "NIDORAN", "NIDORINA", "NIDOQUEEN", "NIDORAN", "NIDORINO", "NIDOKING", "CLEFAIRY", "CLEFABLE", "VULPIX", "NINETALES", "JIGGLYPUFF", "WIGGLYTUFF", "ZUBAT", "GOLBAT", "ODDISH", "GLOOM", "VILEPLUME", "PARAS", "PARASECT", "VENONAT", "VENOMOTH", "DIGLETT", "DUGTRIO", "MEOWTH", "PERSIAN", "PSYDUCK", "GOLDUCK", "MANKEY", "PRIMEAPE", "GROWLITHE", "ARCANINE", "POLIWAG", "POLIWHIRL", "POLIWRATH", "ABRA", "KADABRA", "ALAKAZAM", "MACHOP", "MACHOKE", "MACHAMP", "BELLSPROUT", "WEEPINBELL", "VICTREEBEL", "TENTACOOL", "TENTACRUEL", "GEODUDE", "GRAVELER", "GOLEM", "PONYTA", "RAPIDASH", "SLOWPOKE", "SLOWBRO", "MAGNEMITE", "MAGNETON", "FARFETCH'D", "DODUO", "DODRIO", "SEEL", "DEWGONG", "GRIMER", "MUK", "SHELLDER", "CLOYSTER", "GASTLY", "HAUNTER", "GENGAR", "ONIX", "DROWZEE", "HYPNO", "KRABBY", "KINGLER", "VOLTORB", "ELECTRODE", "EXEGGCUTE", "EXEGGUTOR", "CUBONE", "MAROWAK", "HITMONLEE", "HITMONCHAN", "LICKITUNG", "KOFFING", "WEEZING", "RHYHORN", "RHYDON", "CHANSEY", "TANGELA", "KANGASKHAN", "HORSEA", "SEADRA", "GOLDEEN", "SEAKING", "STARYU", "STARMIE", "MR. MIME", "SCYTHER", "JYNX", "ELECTABUZZ", "MAGMAR", "PINSIR", "TAUROS", "MAGIKARP", "GYARADOS", "LAPRAS", "DITTO", "EEVEE", "VAPOREON", "JOLTEON", "FLAREON", "PORYGON", "OMANYTE", "OMASTAR", "KABUTO", "KABUTOPS", "AERODACTYL", "SNORLAX", "ARTICUNO", "ZAPDOS", "MOLTRES", "DRATINI", "DRAGONAIR", "DRAGONITE", "MEWTWO", "MEW"],
  
  
  getRandomPokemon: function() {
    return this.pokemons[Math.floor(Math.random() * this.pokemons.length)];
  },
  setSelectedPokemon: function(getRandomPokemon) {
    this.selectedPokemon = getRandomPokemon;
    console.log(this.selectedPokemon)
    this.counts = {};
    //counts the instances of a letter in the selectedPokemon//
    this.selectedPokemon.split("").forEach(letter => {
    //if selectedPokemon letter is in the counts object, increment enum by 1//
    //if letter is first instance or only instance of letter in selectedPokemon, set count enum to 1//
    this.counts[letter] = this.counts[letter] ? this.counts[letter] + 1 : 1;
});
    console.log(this.counts)
  },
  
  getPlaceHolder: function() {
      let placeHolder = this.selectedPokemon.split("").map(letter => letter = "_");
      return placeHolder.join(" ")
  },
  setPlaceHolder: function(getPlaceHolder) {
    this.placeHolder = getPlaceHolder;
  },
  
  getGuessedCharacters: function() {
    if (typeof document.getElementById("div3").textContent != "undefined") {
      return document.getElementById("div3").textContent.replace("Guessed characters: ", "")
    }
  },
  setGuessedCharacters: function(guessCharacters) {
    console.log(guessCharacters)
    this.guessedCharacters = guessCharacters;
  },
  //gets the most recent keyboard input//
  getCurrentGuess: function(keyInput) {
    return keyInput
  },
  setCurrentGuess: function(currentGuess) {
    this.currentGuess = currentGuess;
  },
  
  setPopulatePlaceHolder: function(correctArray) {
    this.correctArray = correctArray;
  },
  createResetButton: function() {
     resetButton = document.createElement("button");
     resetButton.setAttribute("id", "resetButton");
     resetButton.setAttribute("type", "button");
     resetButtonContent = document.createTextNode("Play Again");
     resetButton.appendChild(resetButtonContent);
     if (document.getElementById("winMessage") != null) {
       parentResetButtonDiv = document.getElementById("winMessage");
     }
     if (document.getElementById("loseMessage") != null) {
       parentResetButtonDiv = document.getElementById("loseMessage");
     }
     

     document.body.insertBefore(resetButton, parentResetButtonDiv.nextSibling);

     resetButton.onclick = function() {
       hangMan.resetGame();
     }
     
  },
  createWinMessage: function() {
    winMessage = document.createElement("h3");
    winMessage.setAttribute("id", "winMessage")
    winMessageContent = document.createTextNode("You Win!");
    winMessage.appendChild(winMessageContent);
    parentWinMessageDiv = document.getElementById("div3");
    document.body.insertBefore(winMessage, parentWinMessageDiv.nextSibling);
  },
  createLoseMessage: function() {
    loseMessage = document.createElement("h3");
    loseMessage.setAttribute("id", "loseMessage")
    loseMessageContent = document.createTextNode("Sorry, you ran out of guesses!");
    loseMessage.appendChild(loseMessageContent);
    parentLoseMessageDiv = document.getElementById("div3");
    document.body.insertBefore(loseMessage, parentLoseMessageDiv.nextSibling);
    
    loseChosenPokemon = document.createElement("h4");
    loseChosenPokemon.setAttribute("id", "loseChosenPokemon")
    loseChosenPokemonContent = document.createTextNode("Your selected pokemon was " + hangMan.selectedPokemon);
    loseChosenPokemon.appendChild(loseChosenPokemonContent);
    parentLoseChosenPokemon = document.getElementById("loseMessage");
    parentLoseChosenPokemon.appendChild(loseChosenPokemon);
  },
  
  prepareScreen: function() {
      placeHolderDiv = document.createElement("div");
      placeHolderDiv.setAttribute("id", "div4");
      placeHolderContent = document.createTextNode(this.placeHolder);
      placeHolderDiv.appendChild(placeHolderContent);
      placeHolderCurrentDiv = document.getElementById("div1");
      document.body.insertBefore(placeHolderDiv, placeHolderCurrentDiv.nextSibling);
    
      guessDiv = document.createElement("div");
      guessDiv.setAttribute("id", "div3");
      guessContent = document.createTextNode("Guessed characters: ");
      guessDiv.appendChild(guessContent);
      guessContentCurrentDiv = document.getElementById("div2");
      document.body.insertBefore(guessDiv, guessContentCurrentDiv.nextSibling);
    
      remainingGuesses = document.createElement("div");
      remainingGuesses.setAttribute("id", "remainingGuessesDiv");
      remainingGuessesContent = document.createTextNode("Remaining Wrong Guesses: " + hangMan.remainingGuesses);
      remainingGuesses.appendChild(remainingGuessesContent);
      remainingGuessesCurrentDiv = document.getElementById("div2");
      document.body.insertBefore(remainingGuesses, remainingGuessesCurrentDiv.nextSibling);
    },
  
  getGuess: function() {
    document.body.onkeyup = function(event) {
     if (hangMan.wrongGuessCount == hangMan.allowedGuesses || hangMan.winState == true) {
      return
    }
     
      hangMan.setGuessedCharacters(hangMan.getGuessedCharacters());
      console.log(event.keyCode)
      console.log(String.fromCharCode(event.keyCode))
      if (/^[a-zA-Z]+$/.test(String.fromCharCode(event.keyCode)) && !hangMan.guessedCharacters.includes(String.fromCharCode(event.keyCode))) {
      console.log(event.keyCode)
      console.log(String.fromCharCode(event.keyCode))
      document.getElementById("div3").innerHTML += String.fromCharCode(event.keyCode);
      hangMan.setCurrentGuess(hangMan.getCurrentGuess(String.fromCharCode(event.keyCode)));
      hangMan.setGuessedCharacters(hangMan.getGuessedCharacters());
      hangMan.setPopulatePlaceHolder(hangMan.populatePlaceHolder());
      hangMan.populatePlaceHolder();
      hangMan.checkWinLose();
      }
    }
  },
  
  populatePlaceHolder: function() {
    console.log(this.correctArray)
    if (this.selectedPokemon.toUpperCase().split("").includes(this.currentGuess)) {
        if (typeof this.correctArray == "undefined") {
        this.correctArray = this.selectedPokemon.toUpperCase().split("").map(function(letter) {if (letter != this.currentGuess) {
          return letter.replace(letter, "_")}});
        }
      for (let i=0; i<this.correctArray.length; i++) {
      if (this.selectedPokemon.toUpperCase().split("")[i] == this.currentGuess) {
        this.correctArray.splice(i, 1, this.currentGuess)
      }
    }
      let div4 = document.getElementById("div4");
      div4.innerHTML = this.correctArray.join(" ");
      return this.correctArray
  }
    return this.correctArray

  },
  
  resetGame: function() {
    hangMan.setSelectedPokemon(hangMan.getRandomPokemon());
    hangMan.setPlaceHolder(hangMan.getPlaceHolder());
    delete this.correctArray;
    this.wrongGuessCount = 0;
    hangMan.winState = false;
    let div3 = document.getElementById('div3');
    let div4 = document.getElementById('div4');
    let resetButton = document.getElementById("resetButton");
    let winMessage = document.getElementById("winMessage");
    let loseMessage = document.getElementById("loseMessage");
    let remainingGuessesDiv = document.getElementById("remainingGuessesDiv");

    div3.remove();
    div4.remove();
    remainingGuessesDiv.remove();
    if (resetButton != null) {
      resetButton.remove();
    }
    if (winMessage != null) {
      winMessage.remove();
    }
    if (loseMessage != null) {
      loseMessage.remove();
    }
    hangMan.remainingGuesses = hangMan.allowedGuesses;
    
    hangMan.prepareScreen();
  },
  
  checkWinLose: function() {
    //counts object is populated with unique values from selected pokemon//
    console.log(hangMan.counts);
    this.uniqueLetters = Object.keys(hangMan.counts);
    console.log(this.uniqueLetters);
    console.log(hangMan.guessedCharacters.split(""));
    hangMan.setWrongGuessCount(hangMan.getWrongGuessCount(hangMan.compare(this.uniqueLetters, hangMan.guessedCharacters.split(""))));
    
    if (this.correctArray != undefined) {
    this.correctArrayObj = {};
    this.correctArray.forEach(letter => {
    this.correctArrayObj[letter] = this.correctArray[letter] ? this.correctArray[letter] + 1 : 1;
});
    }

    if (hangMan.wrongGuessCount == hangMan.allowedGuesses) {
      //call fail game logic// 
      console.log("YOU LOST")
      hangMan.createLoseMessage();
      hangMan.createResetButton();
    }
    if (JSON.stringify(Object.keys(hangMan.counts)) === JSON.stringify(Object.keys(hangMan.correctArrayObj))) {
      //call win game logic//
      console.log("YOU WON")
      hangMan.winState = true
      hangMan.createWinMessage();
      hangMan.createResetButton();
      
      
    }
    
  },
  
  getWrongGuessCount: function(correctGuesses) {
    if (correctGuesses == 0) {
      this.wrongGuessCount = this.wrongGuessCount + 1
      return hangMan.wrongGuessCount;
    }
    return hangMan.guessedCharacters.length - correctGuesses.length;
  },
  //sets the current wrong guess count and the number of guesses remaining//
  setWrongGuessCount: function(correctGuessCount) {
    if (isNaN(correctGuessCount)) {
      this.wrongGuessCount = 1 + hangMan.wrongGuessCount;
    }
    this.wrongGuessCount = correctGuessCount;
    hangMan.remainingGuesses = hangMan.allowedGuesses - this.wrongGuessCount;
    document.getElementById("remainingGuessesDiv").innerHTML = "Remaining Wrong Guesses: " + hangMan.remainingGuesses;
    
  },
  //takes two arrays as input parameters//
  //returns an array of shared values between two input arrays//
  compare: function(arr1,arr2){
  
    const objMap={};

    arr1.forEach((e1)=>arr2.forEach((e2)=> {if(e1 === e2){
         objMap[e1]=objMap[e1]+1||1 ;
      }
    }
  ));
    console.log(Object.keys(objMap));
    return Object.keys(objMap);
  },
  
  //runs to setup initial game state//
  setupGame: function() {
    hangMan.setSelectedPokemon(hangMan.getRandomPokemon());
    hangMan.setPlaceHolder(hangMan.getPlaceHolder());
    hangMan.getAllowedGuesses(6)
    hangMan.prepareScreen();
    hangMan.getGuess();
  }



}
hangMan.setupGame();
