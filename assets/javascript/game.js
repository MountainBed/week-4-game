var game = {
    // Variable definitions
    wins: 0,
    losses: 0,
    randomNum: 0,
    userSum: 0,
    crystalValues: [],
    randomFactors: [],
    // Function definitions
    // Finds crystal values for clickable images
    randomCrystalValues: function() {
        var num = 12;
        var currentNum = 0;
        game.crystalValues = [];

        for (var i = 0; i < 4; i++) {
            do {
                currentNum = Math.ceil(Math.random() * num);
            } while (game.crystalValues.includes(currentNum))
            game.crystalValues.push(currentNum);
        }
    },
    // Finds factors to find the random sum
    randomFactorValues: function() {
        var num = 3;
        var currentNum = 0;
        game.randomFactors = [];

        for (var i = 0; i < 4; i++) {
            currentNum = Math.ceil(Math.random() * num);
            game.randomFactors.push(currentNum);
        }

    },
    // Finds the sum based on crystal values and random factors
    defineSum: function() {

        game.randomCrystalValues();
        game.randomFactorValues();
        game.randomNum = 0;

        console.log("Crystal values: " + game.crystalValues);
        console.log("Random factors: " + game.randomFactors);
        for (var i = 0; i < game.crystalValues.length; i++) {
            game.randomNum = game.randomNum + (game.crystalValues[i] * game.randomFactors[i]);
        }
    },
    // Displays values to page
    fillHTML: function() {
        $("#dispRand").html(game.randomNum);
        $("#winTotal").html(game.wins);
        $("#lossTotal").html(game.losses);
        $("#sum").html(game.userSum);
    }
}
$(document).ready(function() {

    game.defineSum();
    game.fillHTML();

    console.log("Random sum: " + game.randomNum);

})
