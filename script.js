let buttonMode;
let colors = {
  normal: "black",
  rainbow: null,
};
const rainbowButton = document.querySelector(".rainbow-button");
rainbowButton.addEventListener("click", () => {
  chooseRainbowMode();
  buttonMode = getButtonMode(rainbowButton);
  changeButtonColor(buttonMode);
});
const normalButton = document.querySelector(".normal-button");
normalButton.addEventListener("click", () => {
  chooseNormalMode();
  buttonMode = getButtonMode(normalButton);
  changeButtonColor(buttonMode);
});
const eraserButton = document.querySelector(".eraser-button");
eraserButton.addEventListener("click", () => {
  eraseGrid();
  buttonMode = getButtonMode(eraserButton);
  changeButtonColor(buttonMode);
});
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearGrid);

const colorPallete = document.querySelector(".color-pallete");
colorPallete.addEventListener("input", (e) => {
  color = getColor(e);
});
const sizeRange = document.querySelector(".size-range");
sizeRange.addEventListener("input", (e) => {
  const size = e.target.value;
  renderSize(size);
  changeSize(size);
});
const sizeValue = document.querySelector(".size-value");

function getButtonMode(button) {
  return (buttonMode = button.getAttribute("data-id"));
}

function changeButtonColor(mode) {
  normalButton.classList.remove("choosen-button");
  rainbowButton.classList.remove("choosen-button");
  eraserButton.classList.remove("choosen-button");
  if (mode === "normal") {
    normalButton.classList.add("choosen-button");
  } else if (mode === "rainbow") rainbowButton.classList.add("choosen-button");
  else eraserButton.classList.add("choosen-button");
}

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
    const itemColor = colors.normal;
    item.setAttribute("style", `background-color: ${itemColor}`);
  }
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

function getColor(e) {
  return (colors.normal = e.target.value);
}

function chooseNormalMode() {
  mousePainting("normal");
}

function chooseRainbowMode() {
  mousePainting("rainbow");
}

function rainbowPainting(item) {
  let rgbArr = [];
  for (let i = 0; i < 3; i++) {
    rgbArr[i] = Math.floor(Math.random() * (255 - 0) + 0);
  }
  colors.rainbow = "#" + rgbToHex(rgbArr[0], rgbArr[1], rgbArr[2]);
  item.setAttribute("style", `background-color: ${colors.rainbow}`);
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
