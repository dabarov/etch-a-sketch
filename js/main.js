function addListenerToDivs() {
  let divs = document.querySelectorAll('.square');
  divs.forEach((item) => {
    item.addEventListener('mouseover', (e) => item.classList.add('hovered'));
  });
  return divs;
}

function areProperSizes(width, height) {
  if (width > 0 && width < 101 && height > 0 && height < 101) return true;
  return false;
}

function createGrid(rows = 50, colums = 50) {
  main.style['grid-template-rows'] = `repeat(${rows}, auto)`;
  main.style['grid-template-columns'] = `repeat(${colums}, auto)`;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colums; j++) {
      let div = document.createElement('div');
      div.classList.add('square');
      main.appendChild(div);
    }
  }
}

function removeChildren(container) {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

const main = document.querySelector('main');
createGrid();
let divs = addListenerToDivs();
let warning = document.querySelector('#warning');

let resetButton = document.querySelector('#btn-reset');
resetButton.addEventListener('click', (e) => {
  divs.forEach((item) => {
    item.classList.remove('hovered');
  });
});

let gridButton = document.querySelector('#btn-grid');
gridButton.addEventListener('click', (e) => {
  let width = document.getElementById('width').value;
  let height = document.getElementById('height').value;
  removeChildren(main);
  if (areProperSizes(width, height)) {
    warning.textContent = '';
    createGrid(width, height);
    divs = addListenerToDivs();
  } else {
    warning.textContent = 'Enter sizes in range (1; 100)';
  }
});
