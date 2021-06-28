const aceOfSpadesOne = document.getElementById('ace-spades-one');
const aceOfSpadesTwo = document.getElementById('ace-spades-two');
let counter = 0;

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
    document.querySelectorAll('.same_card')[1].src = './card-back.png'

    function removeClasses() {
      document.querySelectorAll('.same_card')[0].classList.remove('same_card');
      document.querySelectorAll('.same_card')[0].classList.remove('same_card');   
    }
    removeClasses()
}, 3000);

counter = 0;
    
    }

  }


  
}

