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

    if (input == 5) {
        return true;
    }

    return typeof input === "boolean";

}