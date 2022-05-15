// RANDOMIZE FORMULA FROM DICE ACTIVITY 

var randomPicture1 = Math.floor(Math.random() * 3) + 1;
var randomPicture2 = Math.floor(Math.random() * 3) + 1;

// VARIABLE FOR RANDOM IMG

var randomImage1 = `images/rsp${randomPicture1}.jpg`;
var randomImage2 = `images/rsp${randomPicture2}.jpg`;

// IMAGE LOCATION DOM

var image1 = document.querySelectorAll('img')[0];
var image2 = document.querySelectorAll('img')[1];

// RANDOM IMG SRC

image1.setAttribute('src', randomImage1);
image2.setAttribute('src', randomImage2);

// VAR NAMES

var rock = 'images/rsp1.jpg';
var paper = 'images/rsp3.jpg';
var scissors = 'images/rsp2.jpg';

// CONDITIONAL STATEMENTS
// P1 ROCK V P2 SCISSORS "ROCK WINS"

if (randomImage1 === rock && randomImage2 === scissors ){
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').textContent = "PLAYER 2 LOSE!";
    
}

// P1 SCISSORS V P2 ROCK "ROCK WINS"
else if (randomImage1 === scissors && randomImage2 === rock ){
    document.querySelector('h1').textContent = "ROCK WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE!";
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
    
}


// P1 Scissors vs P2 Paper "SCISSORS WINS"
else if(randomImage1 === scissors && randomImage2 === paper ){
    document.querySelector('h1').textContent = "SCISSORS WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').textContent = "PLAYER 2 LOSE!";
   
}

//  P2 SCISSORS V P1 PAPER "SCISSORS WINS!
else if (randomImage2 === scissors && randomImage1 === paper ){
    document.querySelector('h1').textContent = "SCISSORS WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE!";
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
    
}

// P1 PAPER V P2 ROCK "PAPER WINS!"
else if (randomImage1 === paper && randomImage2 === rock ){
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').textContent = "PLAYER 2 LOSE!";
   
}

// P2 PAPER V P1 ROCK "PAPER WINS!"
else if (randomImage1 === rock && randomImage2 === paper ){
    document.querySelector('h1').textContent = "PAPER WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE!";
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
    
}

// DRAW
else {
    document.querySelector('h1').textContent = "DRAW!";
    document.querySelector('.p1').textContent = "PLAYER 1 DRAW!";
    document.querySelector('.p2').textContent = "PLAYER 2 DRAW!";
}

