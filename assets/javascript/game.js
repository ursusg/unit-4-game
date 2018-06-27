$(document).ready(function () {

    var possibleCrystals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var crystalArray = [];
    //To find a random target value
    var targetScore = randomTargetScore();
    var wins = 0;
    var losses = 0;
    var userScore = 0;
    var crystal1 = $("#crystal1");
    var crystal2 = $("#crystal2");
    var crystal3 = $("#crystal3");
    var crystal4 = $("#crystal4");

    // displays targetScore for the player
    function displayTarget(){
        $("#targetDisplay").text(targetScore);
    }
    
    // function to get randomtargetscore
    function randomTargetScore() {
        var x = Math.floor((Math.random() * 100) + 12);
        console.log("reset function")
        return x;
    }
    
    // Each crystal gets their data value set to whatever the randomNumber generator gets for it
    function addcrystalValue() {
        for (var i = 0; i < 4; i++) {

            var randomValue = Math.floor((Math.random() * possibleCrystals.length) + 1);
            crystalArray.push(randomValue);
            console.log(crystalArray);
        };
    };

    // add the crystalArray values to each image

    function crystalValue() {
        crystal1 = crystalArray[0];
        crystal2 = crystalArray[1];
        crystal3 = crystalArray[2];
        crystal4 = crystalArray[3];

        console.log(crystal1, crystal2, crystal3, crystal4);

    };

    function resetGame() {
        crystalArray.length = 0;
        userScore = 0;
        addcrystalValue();
        crystalValue();
        randomTargetScore();
        displayTarget();

    };

    function checkWins() {

        if (userScore === targetScore) {
            console.log("You won!");
            $("#wins").append(wins);
            resetGame();
        }
        else if (userScore > targetScore) {
            alert("LOSER");
            $("#losses").append(losses);
            resetGame();
        }
        else {

        }
    };
    // records users score when they click on an item

    crystal1.on("click", function () {

        userScore = userScore + crystal1;
        checkWins();
        console.log(userScore);
    });

    crystal2.on("click", function () {

        userScore = userScore + crystal2;
        checkWins();
        console.log(userScore);
    });

    crystal3.on("click", function () {

        userScore = userScore + crystal3;
        checkWins();
        console.log(userScore);
    });

    crystal4.on("click", function () {

        userScore = userScore + crystal4;
        checkWins();
        console.log(userScore);
    });






    displayTarget();
    addcrystalValue();
    crystalValue();



});