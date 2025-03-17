let display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

const transform = (value, operator) => value.toLowerCase().split(operator).map(x => parseInt(x))

function stripLast(value) {
    let last = value[value.length - 1]  
    if (["+", "-", "x", "/"].includes(last.toLowerCase())) {
        return value.slice(0, value.length - 1)
    }
    return value
}

function calculate() {
    let value = stripLast(display.value)
    if (value.includes("+")) {
        display.value = transform(value, "+")
            .reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
    } else if (value.includes("-")) {
        display.value = transform(value, "-")
            .reduce((accumulator, currentvalue) => accumulator - currentvalue, 0)
    } else if (value.toLowerCase().includes("x")) {
        let si = transform(value, "x")
        let initial = si[0]
            display.value = si.slice(1).reduce((accumulator, currentvalue) => accumulator * currentvalue, initial)
    } else {
        let ji = transform(value, "/")
        let initial = ji[0];
            display.value = ji.slice(1).reduce((accumulator, currentvalue) => accumulator / currentvalue, initial)
    }
}