
const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

// if (!score) {
//         score = {
//             wins: 0,
//             losses: 0,
//             ties: 0
//         };
// }

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let res = '';
    
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            res = 'Lose';
        }
        else if (computerMove === 'Paper') {
            res = 'Win';
        }
        else if (computerMove === 'Scissors') {
            res = 'Tie';
        }
    }
    
    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            res = 'Win';
        }
        else if (computerMove === 'Paper') {
            res = 'Tie';
        }
        else if (computerMove === 'Scissors') {
            res = 'Lose';
        }
    }

    else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            res = 'Tie';
        }
        else if (computerMove === 'Paper') {
            res = 'Lose';
        }
        else if (computerMove === 'Scissors') {
            res = 'Win';
        }
    }

    if (res === 'Win') {
        score.wins++;
    }
    else if (res === 'Lose') {
        score.losses++;
    }
    else if (res === 'Tie') {
        score.ties++;
    }
    
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = `You ${res}`;

    document.querySelector('.js-moves').innerHTML = `You
        <img src="images/${playerMove}-emoji.png">
        <img src="images/${computerMove}-emoji.png">
        Computer`;

    
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Win: ${score.wins} Lose: ${score.losses} Tie: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}