$(document).ready(function() {

  /*--- Display information modal box ---*/
  $(".what").click(function() {
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function() {
    $(".overlay").fadeOut(1000);
  });

  window.onload = newGame;

  /*--- New Game ---*/
  $(".new").click(function() {
    newGame();
  });

  $(".button").click(function() {
      event.preventDefault();
      confirmInt();
      checkGuess();
      listGuess();
      countGuess();
  });
  $(document).keydown(function() {
    if (keydown == 13) {
      event.preventDefault();
      confirmInt();
      checkGuess();
      listGuess();
      countGuess();
    }
  });
});
function newGame() {
    myNumber = Math.floor((Math.random() * 100) + 1);
    $("#guessList").empty();
    $("#count") == 0;
  }

  function confirmInt() {
    var x = $("#userGuess");
    if (x.indexOf(".") == -1) {
      var y = parseInt(x);
      var newGuess = +y;
    } else {
      var y = parseInt(x);
      var z = +y;
      var newGuess = Math.round(z);
    }
  }

  function checkGuess() {
    if (newGuess == myNumber) {
      $("#feedback") == "You're on fire! You Guessed Correctly!";
    } else if (newGuess < myNumber && newGuess > oldGuess || newGuess > myNumber && newGuess < oldGuess) {
      $("#feedback") == "Warmer";
    } else if ((newGuess < myNumber && newGuess < oldGuess) || (newGuess > myNumber && newGuess > oldGuess)) {
      $("#feedback") == "Colder";
    }
  }

  function countGuess() {
    $("#count") == $("#guessList").length;
  }

  function listGuess() {
    var uGuess = document.GetElementByID("userGuess").value;
    var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(uGuess));
    $("#guessList").appendChild(entry);
  }