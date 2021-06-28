const attempts = document.querySelector('.attempts')
let counter = 0;
let numOfAttempts = 0;

function removeClasses() {
      document.querySelectorAll('.same_card')[(document.querySelectorAll('.same_card').length-1)].classList.remove('same_card');
      document.querySelectorAll('.same_card')[(document.querySelectorAll('.same_card').length-1)].classList.remove('same_card');   
    }

function revealCard(id, card) {
counter++

  if(document.getElementById(id).getAttribute('src') == "./card-back.png") {
    document.getElementById(id).src = card;
    document.getElementById(id).classList.add('same_card')
  }

  
  if (counter === 2) {
    if(document.querySelectorAll('.same_card')[0].src !== document.querySelectorAll('.same_card')[1].src) {

  setTimeout(function() {

    document.querySelectorAll('.same_card')[0].src = './card-back.png'
    document.querySelectorAll('.same_card')[(document.querySelectorAll('.same_card').length-1)].src = './card-back.png'

    
    counter = 0;
    numOfAttempts++
    removeClasses()
}, 3000);

    } else {
      numOfAttempts++
      counter = 0;
      removeClasses();
    }
  }
  attempts.innerHTML = `<h1>Number of attempts: ${numOfAttempts}</h1>`;
}

