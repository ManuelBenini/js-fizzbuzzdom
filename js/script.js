/*
  a.  Scrivere un programma che stampi i numeri da 1 a 100 dentro un container,
  b.  Per i multipli di 3 stampare Fizz,
  c.  Per i multipli di 5 stampare Buzz,
  d.  Per i multi di 3 e 5 stampare FizzBuzz,
  f.  Creare stili differenti per le 3 situazioni sovrastanti.

  1.  Dichiarare le variabili,
  2.  Creare un ciclo For con start 1 e limite 100,
  3.  Aggiungere le condizioni IF per i multipli con aggiunta classi,
  4.  Scrivere dentro il container nel DOM i vari div.
*/

const container = document.querySelector('#container');

const limit = 100;

for (let i = 1; i <= limit; i++){
  console.log(i);
  const defaultBox = document.createElement("div");
  defaultBox.className = "box";
  

  //multiplo di 3 e 5
  if (i % 3 === 0 && i % 5 === 0){
    defaultBox.classList.add("box-union");
    defaultBox.textContent = 'FizzBuzz';

  //multiplo di 5
  }else if (i % 5 === 0){
    defaultBox.classList.add("box-five");
    defaultBox.textContent = 'Buzz';

  //multiplo di 3
  }else if (i % 3 === 0){
    defaultBox.classList.add("box-three");
    defaultBox.textContent = 'Fizz';
    
  }else{
    defaultBox.append(i);
  }

  container.append(defaultBox);
}