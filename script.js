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

function scientific(type) {
    let value = Number(display.value);

    if (display.value.trim() === "") {
        return;
    }

    let result;

    switch (type) {
        case "sin":
            result = Math.sin(value * Math.PI / 180);
            break;

        case "cos":
            result = Math.cos(value * Math.PI / 180);
            break;

        case "tan":
            result = Math.tan(value * Math.PI / 180);
            break;

        case "sqrt":
            result = Math.sqrt(value);
            break;

        case "square":
            result = value * value;
            break;

        default:
            return;
    }

    display.value = Number(result.toFixed(10));
    
}

