// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liEl = document.createElement("li");
    liEl.textContent = ingredient;
    liEl.classList.add("item");
    // console.log(liEl)
    return liEl;
  });
};

const ulEl = document.querySelector("#ingredients");
const list = createList(ingredients);
console.log(ulEl);
ulEl.append(...list);
