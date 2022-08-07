// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  input: document.querySelector("#controls > input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

const maxValue = 100;
const minValue = 1;

// console.log(refs.input);
// console.log(refs.buttonCreate);
// console.log(refs.buttonDestroy);
// console.log(+refs.input.value);

function createValue() {
  if (minValue > +refs.input.value || maxValue < +refs.input.value) {
    alert("Please write any number till 100!");
  } else {
    createBoxes(+refs.input.value);
  }
}

function createBoxes(amount) {
  refs.boxesEl.innerHTML = "";
  for (let i = 0; i < amount; i += 1) {
    const boxWidth = i * 10 + 30;
    const boxHeight = boxWidth;
    refs.boxesEl.insertAdjacentHTML(
      "beforeend",
      `<div style="width:${boxWidth}px; height:${boxHeight}px; background-color: ${getRandomHexColor()}";></div>`
    );
  }
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.input.value = "";
}

refs.buttonCreate.addEventListener("click", createValue);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function creatorBox() {
//   return `<div style="width:${boxWidth}px; height:${boxHeight}px; background-color: ${getRandomHexColor()}";></div>`;
// }
