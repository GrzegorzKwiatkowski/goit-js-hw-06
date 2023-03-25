const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
let li = document.createElement("li");

/*for (let i = 0; i <= ingredients.length; i++) {
    list.textContent = ingredients[i];
    list.classList.add("item");
    document.body.append(list);
    console.log(list);
    console.log(i);
  }*/

/*ingredients.forEach(function (ele) {
  list.textContent = ele;
  list.classList.add("item");
  document.body.append(list);
  console.log(list);
  console.log(i);
});*/

ingredients.forEach(function (e, i) {
  li = document.createElement("li");
  li.textContent = e;
  li.classList.add("item");
  list.append(li);

  console.log(list);
  console.log(i);
});
