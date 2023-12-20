const eraserButton = document.querySelector(".eraser-button");
eraserButton.addEventListener("click", eraseGrid);
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearGrid);
const colorPallete = document.querySelector(".color-pallete");
colorPallete.addEventListener("input", (e) => {
  pickColor(e);
});
const sizeRange = document.querySelector(".size-range");
sizeRange.addEventListener("input", (e) => {
  const size = e.target.value;
  renderSize(size);
  changeSize(size);
});
const sizeValue = document.querySelector(".size-value");

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

function renderSize(size) {
  sizeValue.innerHTML = `<p>${size}x${size}</p>`;
}

function changeSize(size) {
  const gridRows = document.querySelectorAll(".grid-row");
  gridRows.forEach((singleItem) => {
    singleItem.remove();
  });
  renderGrid(size);
}

function eraseGrid() {
  mousePainting("white");
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

renderGrid(16);
renderSize(16);
