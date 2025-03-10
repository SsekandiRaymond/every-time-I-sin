// Vanilla
function tree1(height) {
    if (height < 1) return console.log("Tree height should be atleast 1");
    for (let index = 1; index <= height; index++) {
        console.log("*".repeat(index));
    }
}

function tree2(height) {
    if (height < 1) return console.log("Tree height should be atleast 1");
    for (let index = 1; index <= height; index++) {
        console.log(" ".repeat(height - index) + "*".repeat(index * 2 - 1));
    }
}

function tree3(height) {
    if (height < 1) return console.log("Tree height should be atleast 1");
    for (let index = 1; index <= height; index++) {
        console.log(" ".repeat(height - index) + "*".repeat(index));
    }
}

function blankTriangle(height) {
    if (height < 1) return console.log("Tree height should be atleast 1");
    console.log("*".repeat(height * 2 + 1));
    console.log("*".repeat(height * 2 + 1));

    for (let index = 1; index <= height; index++) {
        const borders = "*".repeat(height - index + 1);
        console.log(borders + " ".repeat(index * 2 - 1) + borders);
    }

    console.log("*".repeat(height * 2 + 1));
}

function blankInvertedTriangle(height) {
    if (height < 1) return console.log("Tree height should be atleast 1");
    console.log("*".repeat(height * 2 + 1));

    for (let index = height; index >= 1; index--) {
        const borders = "*".repeat(height - index + 1);
        console.log(borders + " ".repeat(index * 2 - 1) + borders);
    }

    console.log("*".repeat(height * 2 + 1));
    console.log("*".repeat(height * 2 + 1));
}

// Node.js Required
const readline = require("node:readline");

const prompts = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

prompts.question("Enter tree height value: ", (value) => {
    //value i.e 12
    const height = parseInt(value);
    if (isNaN(height)) {
        console.log("Please enter a valid integer.");
        prompts.close();
        return;
    }

    // Function calls
    blankTriangle(height);
    blankInvertedTriangle(height);

    // The shape the above 2 functions make fascinates me the most.

    tree1(height);
    tree2(height);
    tree3(height);

    prompts.close();
});
