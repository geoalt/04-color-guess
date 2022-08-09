// Acessando elementos
const paraColorToGuess = document.querySelector('#rgb-color');
const colorCirclesOptions = document.querySelector('.guess-color');
const paraAnswer = document.querySelector('#answer');



// Criando elementos
const createList = document.createElement('LI');

const randColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}



const genColorOptions = (numOptions) => {
  for (let i = 0; i < numOptions; i += 1) {
    const createList = document.createElement('LI');
    createList.classList.add('ball');
    createList.style.backgroundColor = randColor();
    createList.addEventListener('click', playerChoice);
    colorCirclesOptions.append(createList);
  }
};
let colorToGuess;
const genGuessTheColor = () => {
  const listColorToGuess = document.querySelectorAll('LI');
  const pickRandomColor = Math.floor(Math.random() * listColorToGuess.length);
  colorToGuess = listColorToGuess[pickRandomColor].style.backgroundColor;
  paraColorToGuess.innerText = colorToGuess;
};

const playerChoice = (choice) => {
  if (choice.target.style.backgroundColor === colorToGuess) {
    paraAnswer.innerText = 'Acertou!';
  } else {
    paraAnswer.innerText = 'Errou! Tente novamente!';
  }
};

window.onload = () => {
  genColorOptions(6);
  genGuessTheColor();
}

