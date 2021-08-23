/**
 * @jest-environment jsdom
 */

const {game, newGame, showScore} = require("../game")

// use this for every html file that you want to load into the DOM

beforeAll(() => { // load all html into mock DOM will run once before all other tests
    let fs = require("fs"); //install fs library which is part of node's default standard library
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// create an object to hold the game state
describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame() works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = 42;
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear playerMoves array", () => {
        // expect(game.playerMoves).toEqual([]);
        expect(game.playerMoves.length).toBe(0);
    });
    test("should be one element in computer's game array", () => {
        // expect(game.currentGame).toEqual([]);
        expect(game.currentGame.length).toBe(1);
    });
    test("should display 0 for the element with the id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    })

})


