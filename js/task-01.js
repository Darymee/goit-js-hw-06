// Напиши скрипт который:

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// **** Variant 1
// №1

const categoriesList = document.querySelectorAll(".item");
console.log(categoriesList);
console.log(`Number of categories: ${categoriesList.length};`);

// №2
categoriesList.forEach((element) => {
  return console.log(
    `Category: ${element.querySelector("h2").textContent}
Elements: ${element.querySelectorAll("li").length}`
  );
});

// **** Variant 2
// №1

// const categoriesList = document.querySelector("#categories");
// // console.log(categoriesList);
// const categoriesEl = Array.from(categoriesList.children);
// console.log(`Number of categorias: ${categoriesEl.length}`);

// // №2
// categoriesEl.map((element) =>
//   console.log(`Category: ${element.querySelector("h2").textContent}
//   Elements: ${element.querySelectorAll("li").length}`)
// );
