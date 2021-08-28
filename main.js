const container = document.querySelector('.container');
const button = document.querySelector('button');
let hex = document.querySelector('.hex');
let colors = ['#F06292', '#E57373', '#BA68C8', '#131516', '#131516'], color;

button.addEventListener('click', (e) => {
  let randColor;
  do {
    randColor = colors[Math.floor(Math.random() * colors.length)];
  } while (color == randColor);
  container.style.backgroundColor = randColor;
  hex.textContent = randColor;
  color = randColor;
});
