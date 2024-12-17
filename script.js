const guessNum = document.getElementById("guessingNum");
const noti = document.getElementById("noti");
const turnNoti = document.getElementById("turn");

let turn = 10;
let randomNumber = Math.floor(Math.random() * 101);

turnNoti.textContent = turn;

function checkNum() {
    let input = guessNum.value;

    if (isNaN(input) || input.trim() === "" || input < 1 || input > 100) {
        setNotification("Please enter a number between 1 and 100.");
        return;
    }

    input = Number(input);

    if (checkTurn()) {
        updateTurn();

        if (input > randomNumber) {
            setNotification("Lower");
        } else if (input < randomNumber) {
            setNotification("Higher");
        } else if (input === randomNumber) {
            setNotification(`You won the game in ${10 - turn} turns!`);
            resetGame();
        }
    } else {
        setNotification(`You lose! The correct number was ${randomNumber}`);
        resetGame();
    }
}

function checkTurn() {
    return turn > 1;
}

function updateTurn() {
    turn--;
    turnNoti.textContent = turn;
}

function resetGame() {
    turn = 10;
    randomNumber = Math.floor(Math.random() * 101);
    turnNoti.textContent = turn;
    guessNum.value = "";
    document.getElementById("btnSubmit").disabled = false;
    document.getElementById("btnQMark").disabled = false;
}

function troll() {
    setNotification("Congratulations, you were trapped :)");
    document.getElementById("btnSubmit").disabled = true;
}

function setNotification(message) {
    noti.textContent = message;
}

function trollToo() {
    setNotification("This is also a trap :)))))");
    document.getElementById("btnQMark").disabled = true;
}
