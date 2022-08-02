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
