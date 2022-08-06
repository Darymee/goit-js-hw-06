// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const valueEl = document.querySelector("#value");
console.log(valueEl);

// console.log(buttonDecrement);
// console.log(buttonIncrement);

const makeDecrement = function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const makeIncrement = function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

buttonDecrement.addEventListener("click", makeDecrement);
buttonIncrement.addEventListener("click", makeIncrement);
