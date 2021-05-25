const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]'),
    body : document.body
}

let interval = null;

refs.buttonStart.addEventListener('click', clickStartBtn);
refs.buttonStop.addEventListener('click', clickStopBtn);



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function clickStartBtn() {
  refs.buttonStart.setAttribute('disabled', true)

  
    interval = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length);
        refs.body.style.backgroundColor = colors[randomColor];
       ;
    }, 500);
}

function clickStopBtn() {
    clearInterval(interval);
    refs.buttonStart.removeAttribute('disabled')
}