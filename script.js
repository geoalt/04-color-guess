// Acessando elementos
const paraColorToGuess = document.querySelector('#rgb-color');
const colorCirclesOptions = document.querySelector('.guess-color');

// Criando elementos
const createList = document.createElement('LI');

const randColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}



const playerChoice = (choice) => {
  console.log(choice.target)
}

const genColorOptions = (numOptions) => {
  for (let i = 0; i < numOptions; i += 1) {
    const createList = document.createElement('LI');
    createList.classList.add('ball');
    createList.style.backgroundColor = randColor();
    createList.addEventListener('click', playerChoice)
    // createList.innerText = i + 1;
    colorCirclesOptions.append(createList);
  }
};


genColorOptions(6);

const listColorToGuess = document.querySelectorAll('LI');
const colorToGuess = Math.floor(Math.random() * listColorToGuess.length);

console.log(colorToGuess)
console.log(listColorToGuess)

paraColorToGuess.innerText = listColorToGuess[colorToGuess].style.backgroundColor;