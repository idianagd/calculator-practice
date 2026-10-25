const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const operatorEl = document.getElementById("operator");
const calcBtn = document.getElementById("calcBtn");
const resultEl = document.getElementById("result");

calcBtn.addEventListener("click", function () {
  const num1 = Number(num1El.value);
  const num2 = Number(num2El.value);
  const operator = operatorEl.value;

  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      resultEl.textContent = "نتیجه: نمیشه تقسیم بر صفر کرد!";
      return;
    }
    result = num1 / num2;
  }

  resultEl.textContent = "نتیجه: " + result;
});
