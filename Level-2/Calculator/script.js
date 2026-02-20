const display = document.getElementById("display");
const historyEl = document.getElementById("history");
const themeToggle = document.getElementById("themeToggle");

let memory = 0;

/* =========================
   APPEND VALUES
========================= */

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

/* =========================
   CALCULATE
========================= */

function calculate() {
  try {
    let expression = display.value;

    expression = expression
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/√\(/g, "Math.sqrt(");

    const result = eval(expression);

    addHistory(display.value, result);
    display.value = result;

  } catch {
    display.value = "Error";
  }
}

function addHistory(exp, res) {
  const li = document.createElement("li");
  li.textContent = `${exp} = ${res}`;
  historyEl.prepend(li);
}

/* =========================
   MEMORY
========================= */

function memoryAdd() {
  memory += Number(display.value) || 0;
}

function memorySub() {
  memory -= Number(display.value) || 0;
}

/* =========================
   THEME TOGGLE (ONLY ONE!)
========================= */

themeToggle.addEventListener("click", function () {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

});

/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener("keydown", function (e) {

  const key = e.key;

  if (!isNaN(key)) append(key);
  else if (key === "+") append("+");
  else if (key === "-") append("-");
  else if (key === "*") append("*");
  else if (key === "/") append("/");
  else if (key === ".") append(".");
  else if (key === "(") append("(");
  else if (key === ")") append(")");

  else if (key === "Enter") {
    e.preventDefault();
    calculate();
  }

  else if (key === "Backspace") {
    backspace();
  }

  else if (key === "Delete") {
    clearDisplay();
  }

});
