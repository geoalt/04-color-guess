// Acessando elementos
const paraColorToGuess = document.querySelector('#rgb-color');

// Criando elementos


const randColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}


console.log(paraColorToGuess)
console.log(randColor())

paraColorToGuess.innerText = randColor();