// use this for every html file that you want to load into the DOM

beforeAll(() => { // load ip html into mock DOM will run once before all other tests
    let fs = require("fs"); //install fs library which is part of node's default standard library
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// create an object to hold the game state

