// Given a sequence of characters AAABBBccccc///4444 write them in a short form 3A3B5c3/44.
// Write another logic to expand the shortened form back to the original.

/**
 * This will shorten the character sequence to e.g 4:4 3:A 3:B 5:c 3::
 * This is a shortened form for AAABBBccccc:::4444
 * */

// Delimiter is useful for telling that the front value is the frequency of the character after the delimiter.
// Used spaces to separate one count of charcter and charcter itself from another set.
const delimiter = ":";

// Use any other character sequence you would like to use
const sequence = "AAABBBccccc  :::4444";

console.log(sequence);

function shorten(sequence) {
    if (!sequence) return;

    // objectContainer stores the sequence characters while counting.
    const objectContainer = {};

    for (let character of sequence) {
        if (!objectContainer[character]) {
            // If character does not exist, set its frequency to zero(0)
            objectContainer[character] = 0;
        }
        // Increment the frequncy of the character in a sequence.
        objectContainer[character]++;
    }

    let result = "";
    const lastIndex = Object.keys(objectContainer).length - 1; // Helps to tell if the program should add a white space at the end or not
    Object.keys(objectContainer).forEach((key, index) => {
        result += `${objectContainer[key]}${delimiter}${key}${index === lastIndex ? "" : " "}`;
    });

    console.log(result);
    return result;
}

const short = shorten(sequence);

function backToOriginal(shortenedSequence) {
    if (!shortenedSequence) return;

    let indexToEliminate = null; // To deal with repetition when dealing with white spaces.

    const sequenceArray = shortenedSequence.split(" ");

    const correctedSequenceArray = sequenceArray.map((value, index) => {
        if (value === "") {
            // if in the shortened form a white space exists, this block works it out
            indexToEliminate = index - 1;
            const valueToReturn = sequenceArray[index - 1] + " ";
            return valueToReturn;
        } else {
            return value;
        }
    });

    if (typeof indexToEliminate === "number") {
        correctedSequenceArray.splice(indexToEliminate, 1); // eliminate the repetition
    }

    let result = "";
    correctedSequenceArray.forEach((pair) => {
        const pairArray = pair.split(delimiter);
        const frequency = parseInt(pairArray[0]);
        const character = pairArray.length === 2 ? pairArray[1] : ":"; // deals with delimiter
        result += character.repeat(frequency);
    });

    console.log(result);
    return result;
}

backToOriginal(short);
