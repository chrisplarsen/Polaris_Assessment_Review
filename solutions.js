// Write your Solutions here!!

function doingJavaScriptRightNow() {
    return true;
}

function onMarsRightNow() {
    return false;
}

function sayHello(value) {
    if (typeof value === "string" && !== "" && isNaN(value)) {
        return "Hello, " + value + "!";
    } else {
        return "Hello, world!";
    }
}

function plusTwo(value) {
    return parseFloat(value) + 2;
    //return parseInt(value) + 2; works as well
}