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

    var num = parseInt(input, 10);

if (num === 5) {
    return true;
} else {
    return false;
}

}