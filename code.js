// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {

    if (typeof input === "boolean") {
        return "Hello, World!";
    }

    return "Hello, " + input + "!";

}

function isFive(input) {

    return input == 5;

}

function isEven(input) {

    return input % 2 == 0;

}

function isVowel(input) {


    return input === "a" || input === "A" || input === "e" || input === "E" || input === "i" || input === "I" || input === "o" || input === "O" || input === "u" || input === "U";

}

function add (numOne, numTwo) {

    var numOneA = parseInt(numOne, 10);
    var numTwoB = parseInt(numTwo, 10);

    return numOneA + numTwoB;

}