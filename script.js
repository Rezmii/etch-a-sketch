function renderGrid(num) {
  const gridContainer = document.querySelector(".grid-container");
  let gridRow;
  for (let j = 0; j < num; j++) {
    gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);
    for (let i = 0; i < num; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridRow.appendChild(gridItem);
    }
  }

  mousePainting();
}

function mousePainting(color = "black") {
  const gridItems = document.querySelectorAll(".grid-item");
  let isMouseDown = false;

  gridItems.forEach((singleItem) => {
    singleItem.addEventListener("mousedown", () => {
      isMouseDown = true;
      changeColor(singleItem, color);
    });

    singleItem.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    singleItem.addEventListener("mouseover", () => {
      if (isMouseDown) {
        changeColor(singleItem, color);
      }
    });
  });
}

function changeColor(item, color) {
  item.setAttribute("style", `background-color: ${color}`);
}

renderGrid(16);

const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", chooseSize);
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearGrid);
const colorPallete = document.querySelector(".color-pallete");
colorPallete.addEventListener("input", (e) => {
  pickColor(e);
});

function chooseSize() {
  let userChoice = prompt("Choose size: ");
  if (userChoice <= 64) {
    const gridRows = document.querySelectorAll(".grid-row");
    gridRows.forEach((singleItem) => {
      singleItem.remove();
    });
    renderGrid(userChoice);
  } else {
    alert("Choose size smaller than 64");
    chooseSize();
  }
}

function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((singleItem) => {
    singleItem.setAttribute("style", "background-color: white");
  });
}

function pickColor(e) {
  let color = e.target.value;
  mousePainting(color);
}
