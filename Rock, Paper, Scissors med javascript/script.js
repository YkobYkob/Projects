let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

//Funktion der skaber computerens random valg af sten, saks eller papir
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//Funktion der converter de forkortede bogstaver fra spillet til ord
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter ==="p") return "Paper";
    if (letter === "s") return "Scissors";
}


//Funktion hvis user vinder
function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "(USER)".fontsize(3).sup();
    const smallComputer = "(COMP)".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUser} Beats 
    ${convertToWord(computer)}${smallComputer}, YOU WIN!`;

    //animation når user vinder
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('green-glow');
    }, 300)
}

//Funktion hvis computer vinder
function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUser = "(USER)".fontsize(3).sup();
    const smallComputer = "(COMP)".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(computer)}${smallUser} Beats 
    ${convertToWord(user)}${smallComputer}, YOU LOSE!`

    //Animation når user taber
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('red-glow');
    }, 300)
}

//Funktion hvis det bliver lige
function draw(user, computer) {
    result_p.innerHTML = `${convertToWord(computer)} Equals 
    ${convertToWord(user)}, DRAW!`

    //Animation når det bliver lige
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('grey-glow');
    }, 300)
}

//funktion for selve spillet
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "sr":
        case "ps":
        lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
        break;
    }
}

//Funktion for hvad der vil ske når man trykker på knapperne
function main(){
rock_div.addEventListener('click', () => {
    game("r")
})

paper_div.addEventListener('click', () => {
    game("p")
})

scissors_div.addEventListener('click', () => {
    game("s")
})
}

main();
