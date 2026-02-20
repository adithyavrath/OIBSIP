function convertTemperature() {

    let temp = document.getElementById("temperature").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result = document.getElementById("result");
    let errorMsg = document.getElementById("errorMsg");

    result.innerHTML = "";
    errorMsg.innerHTML = "";

    if (temp === "" || isNaN(temp)) {
        errorMsg.innerHTML = "Please enter a valid number!";
        return;
    }

    temp = parseFloat(temp);
    let celsius;

    if (from === "C") celsius = temp;
    else if (from === "F") celsius = (temp - 32) * 5/9;
    else if (from === "K") celsius = temp - 273.15;

    let converted;

    if (to === "C") converted = celsius;
    else if (to === "F") converted = (celsius * 9/5) + 32;
    else if (to === "K") converted = celsius + 273.15;

    result.innerHTML =
        `Converted Temperature: ${converted.toFixed(2)} °${to}`;
}

function swapUnits() {
    let from = document.getElementById("fromUnit");
    let to = document.getElementById("toUnit");

    let temp = from.value;
    from.value = to.value;
    to.value = temp;
}

function resetFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("errorMsg").innerHTML = "";
}
