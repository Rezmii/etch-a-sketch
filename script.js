const rainbowButton = document.querySelector(".rainbow-button");
rainbowButton.addEventListener("click", chooseRainbowMode);
const normalButton = document.querySelector(".normal-button");
normalButton.addEventListener("click", chooseNormalMode);
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

function mousePainting(mode = "normal") {
  const gridItems = document.querySelectorAll(".grid-item");
  let isMouseDown = false;

  gridItems.forEach((singleItem) => {
    singleItem.addEventListener("mousedown", () => {
      isMouseDown = true;
      changeColor(singleItem, mode);
    });

    singleItem.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    singleItem.addEventListener("mouseover", () => {
      if (isMouseDown) {
        changeColor(singleItem, mode);
      }
    });
  });
}

function changeColor(item, mode) {
  if (mode === "rainbow") {
    rainbowPainting(item);
  } else if (mode === "eraser") {
    item.setAttribute("style", `background-color: white`);
  } else if (mode === "normal") {
    item.setAttribute("style", `background-color: black`);
  } else item.setAttribute("style", `background-color: ${mode}`);
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
  mousePainting("eraser");
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

function chooseNormalMode() {
  mousePainting();
}

function chooseRainbowMode() {
  mousePainting("rainbow");
}

function rainbowPainting(item) {
  let rgbArr = [];
  for (let i = 0; i < 3; i++) {
    rgbArr[i] = Math.floor(Math.random() * (255 - 0) + 0);
  }
  console.log(rgbArr);
  color = "#" + rgbToHex(rgbArr[0], rgbArr[1], rgbArr[2]);
  console.log(color);
  item.setAttribute("style", `background-color: ${color}`);
}

function valueToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return valueToHex(r) + valueToHex(g) + valueToHex(b);
}

renderGrid(16);
renderSize(16);
