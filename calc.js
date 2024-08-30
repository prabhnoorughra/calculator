const display = document.getElementById("display");

function displayVal(val) {
    display.value += val;
}

function clearVal() {
    display.value = "";
}

function calculateVal() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR";
    }
}