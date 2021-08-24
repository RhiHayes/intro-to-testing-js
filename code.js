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