'use strict';

// find DOM element
const imgs = document.querySelectorAll('img'),
      title = document.querySelector('h1');

      console.log(title);

// function that return random number to dicee
let player_1 = setRandomNumber(),
    player_2 = setRandomNumber();

    console.log(player_1);
    console.log(player_2);


    

function setRandomNumber() {
    let randomNum = Math.random() * 6 + 1;
    return Math.floor(randomNum);
}

// function that change img on page
function changeImgs() {
    imgs.forEach(item => {
        item.classList.add('hidden');
    })
}

function makeVisible() {
    imgs[player_1 - 1].classList.add('active');
    console.log(player_2)
    imgs[player_2 + 5].classList.add('active');
}

function renderWinner() {
    if(player_1 === player_2) {
        title.innerText = 'Dead heat'
    }
    if(player_1 > player_2) {
        title.innerText = 'Player 1 win';
    } 
    if(player_1 < player_2) {
        title.innerText = 'Player 2 win';
    }
}

changeImgs();
makeVisible();
renderWinner();