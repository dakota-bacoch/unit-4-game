$(document).ready(function () {
    //Variables
    var randomNumber = 0;
    var winCount = 0;
    var lossCount = 0;
    var emGem = 0;
    var ruGem = 0;
    var diGem = 0;
    var saGem = 0;
    var totalScore = 0;
    var possibleNumber = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
    var possibleGem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    randomNumber = possibleNumber[Math.floor(Math.random() * possibleNumber.length)];
    $("#numberInBox").html(randomNumber);
    // Win/Loss Statements
    function winLoss() {
        if (totalScore > 1 && totalScore === randomNumber) {
            winCount++;
            $("#win").html(winCount);
            randomNumber = possibleNumber[Math.floor(Math.random() * possibleNumber.length)];
            $("#numberInBox").html(randomNumber);
            totalScore = 0;
            $("#score").html(totalScore);
            while (true) {
                emGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
                ruGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
                diGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
                saGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
                if (emGem !== ruGem && emGem !== diGem && emGem !== saGem && ruGem !== diGem && ruGem !== saGem && diGem !== saGem) {
                    break;
                }
            }
        }

        if (totalScore > randomNumber) {
            lossCount++;
            $("#loss").html(lossCount);
            randomNumber = possibleNumber[Math.floor(Math.random() * possibleNumber.length)];
            $("#numberInBox").html(randomNumber);
            totalScore = 0;
            $("#score").html(totalScore);
            while (true) {
                emGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
                ruGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
                diGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
                saGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
                if (emGem !== ruGem && emGem !== diGem && emGem !== saGem && ruGem !== diGem && ruGem !== saGem && diGem !== saGem) {
                    break;
                }
            }
        }
    }
    //Initiate scores

    while (true) {
        emGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
        ruGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
        diGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
        saGem = possibleGem[Math.floor(Math.random() * possibleGem.length)];
        if (emGem !== ruGem && emGem !== diGem && emGem !== saGem && ruGem !== diGem && ruGem !== saGem && diGem !== saGem) {
            break;
        }
    }

    //Adding variables to the html
    $("#numberInBox").html(randomNumber);
    $("#win").html(winCount);
    $("#loss").html(lossCount);
    $("#score").html(totalScore);

    //Debug
    console.log(emGem);
    console.log(ruGem);
    console.log(diGem);
    console.log(saGem);
    console.log(randomNumber);

    //Adding variables to the html
    $("#numberInBox").html(randomNumber);
    $("#win").html(winCount);
    $("#loss").html(lossCount);
    $("#score").html(totalScore);

    //On Click functions
    $("#emerald").on('click', function () {
        totalScore += emGem;
        $("#score").html(totalScore);
        console.log(totalScore);
        console.log(randomNumber);
        winLoss();
    });

    $("#ruby").on('click', function () {
        totalScore += ruGem;
        $("#score").html(totalScore);
        console.log(totalScore);
        console.log(randomNumber);
        winLoss();
    });

    $("#diamond").on('click', function () {
        totalScore += diGem;
        $("#score").html(totalScore);
        console.log(totalScore);
        console.log(randomNumber);
        winLoss();
    });

    $("#sapphire").on('click', function () {
        totalScore += saGem;
        $("#score").html(totalScore);
        console.log(totalScore);
        console.log(randomNumber);
        winLoss();
    });
});