function renderGrid(num) {
  const gridContainer = document.querySelector(".grid-container");
  let gridItem;
  let gridRow;
  for (let j = 0; j < num; j++) {
    gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);
    for (let i = 0; i < num; i++) {
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
  });
}

renderGrid(16);

const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", chooseSize);

function chooseSize() {
  let userChoice = prompt("Choose size: ");
  const gridRows = document.querySelectorAll(".grid-row");
  gridRows.forEach((singleItem) => {
    singleItem.remove();
  });
  renderGrid(userChoice);
}
