let before = document.getElementById("before");
let after = document.getElementById("after");
let answerArea = document.getElementById("answerArea");
let score = document.getElementById("score");
let multiplyGenerate;
let multOrAdd;


let a = 0;
let streak = 0;

// Assigning Variables to hold table data
// I'm sure there's a more efficient way to do this with an array, maybe later. 
let x1 = document.getElementById("x1");
let x2 = document.getElementById("x2");
let x3 = document.getElementById("x3");
let x4 = document.getElementById("x4");
let x5 = document.getElementById("x5");
let y1 = document.getElementById("y1");
let y2 = document.getElementById("y2");
let y3 = document.getElementById("y3");
let y4 = document.getElementById("y4");
let y5 = document.getElementById("y5");

// Defining the function that generates Random Numbers
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function multiplyValues(a) {
    x1.innerHTML = 0;
    y1.innerHTML = 0 * a;
    x2.innerHTML = 2;
    y2.innerHTML = 2 * a;
    x3.innerHTML = 4;
    y3.innerHTML = 4 * a;
    x4.innerHTML = 6;
    y4.innerHTML = 6 * a;
    x5.innerHTML = 8;
    y5.innerHTML = 8 * a;
};

function addValues(a) {
    x1.innerHTML = 0;
    y1.innerHTML = 0 + a;
    x2.innerHTML = 2;
    y2.innerHTML = 2 + a;
    x3.innerHTML = 4;
    y3.innerHTML = 4 + a;
    x4.innerHTML = 6;
    y4.innerHTML = 6 + a;
    x5.innerHTML = 8;
    y5.innerHTML = 8 + a;
}


function updateScore(correctBinary) {
    if (correctBinary === 1) {
        streak++;
        score.innerHTML = `Streak: ${streak}`;
    } else {
        streak = 0;
        score.innerHTML = "Streak: 0";
    }
};


// Generates a Random Equation
function randomEquation() {
    a = getRandomInt(20) - 9;
    console.log(`a equals ${a}`);
    multiplyGenerate = getRandomInt(2);
    if (multiplyGenerate === 1) {
        multiplyValues(a);
    } else {
        addValues(a);
    };
};

function checkAnswer() {
    let answer = parseInt(answerArea.value);
    console.log(`Answer logged is ${answer}`);
    console.log(typeof answer);
    console.log(`Multiplicative is ${multiplyGenerate}`);
    console.log(`MultOrAdd is ${multOrAdd}`);

    if (answer === a && (multiplyGenerate === multOrAdd)) {
        console.log("Correct!");
        updateScore(1);
    } else {
        console.log("Try again.");
        updateScore(0);
    }
};


document.getElementById("additive").addEventListener("click", function () {
    before.innerHTML = ""; // Clear previous content
    after.innerHTML = ""; // Clear previous content
    katex.render("y = x + ", before);
    multOrAdd = 0;
});

document.getElementById("multiplicative").addEventListener("click", function () {
    before.innerHTML = ""; // Clear previous content
    after.innerHTML = ""; // Clear previous content
    katex.render("y=", before);
    katex.render("x", after);
    multOrAdd = 1;
});

document.getElementById("submit").addEventListener("click", function () {
    checkAnswer();
});

document.getElementById("nextProblem").addEventListener("click", function () {
    randomEquation();
});