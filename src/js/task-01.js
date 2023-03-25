const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  console.log(`Category: ${item.children[0].innerHTML}`);
  console.log(`Elements: ${item.children[1].children.length}`);
}
