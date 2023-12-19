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

  let isMouseDown = false;

  gridItems.forEach((singleItem) => {
    singleItem.addEventListener("mousedown", () => {
      isMouseDown = true;
      changeColor(singleItem);
    });

    singleItem.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    singleItem.addEventListener("mouseover", () => {
      if (isMouseDown) {
        changeColor(singleItem);
      }
    });
  });
}

function changeColor(item) {
  item.setAttribute("style", "background-color: rgb(86, 88, 90)");
}

renderGrid(16);

const sizeButton = document.querySelector(".size-button");
sizeButton.addEventListener("click", chooseSize);

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
