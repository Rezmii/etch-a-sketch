const gridContainer = document.querySelector(".grid-container");
let gridItem;
let gridRow;
for (let j = 0; j < 16; j++) {
  gridRow = document.createElement("div");
  gridRow.classList.add("grid-row");
  gridContainer.appendChild(gridRow);
  for (let i = 0; i < 16; i++) {
    console.log("gridRow");
    gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridRow.appendChild(gridItem);
  }
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((singleItem) => {
  singleItem.addEventListener("mouseover", () => {
    singleItem.setAttribute("style", "background-color: lightcoral");
  });
  singleItem.addEventListener("mouseout", () => {
    singleItem.setAttribute("style", "background-color: lightblue");
  });
});
