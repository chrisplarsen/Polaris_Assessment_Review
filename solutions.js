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

function addOne(value) {
    return parseFloat(value) + 1;
}

function isPositive(value) {
    var answer = parseFloat(value);
    if (isNaN(answer)) {
        return NaN;
    }
    return (answer > 0);
}

function isNegative(value) {
    var answer = parseFloat(value);
    if (is NaN(answer)) {
        return NaN;
    }
    return (answer < 0);
}

function isNumeric(value) {
    var answer = parseFloat(value);
    return isNaN(answer);
}
//for some reason Kathleen said this one is important to keep

function isNotNumeric(value) {
    return !isNumeric(value);
    //var answer = parseFloat(value);
    //     return isNaN(answer);
}

