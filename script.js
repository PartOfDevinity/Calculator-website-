const display = document.getElementById("display");


function appendValue(value) {
    display.value += value;
}

y
function clearDisplay() {
    display.value = "";
}


function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        if (expression.trim() === "") {
            return;
        }

        let result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}