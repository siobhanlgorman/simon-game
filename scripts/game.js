// create gaame object
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
}

// function to reset score to zero
// clear playerMoves array
// clear currentGame array
function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
}

//function to show score
function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = {game, newGame, showScore}