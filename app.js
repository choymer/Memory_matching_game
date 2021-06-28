const aceOfSpadesOne = document.getElementById('ace-spades-one');
const aceOfSpadesTwo = document.getElementById('ace-spades-two');


function revealCard(id, card) {


  if(document.getElementById(id).getAttribute('src') == "./card-back.png") {
    document.getElementById(id).src = card;
  }

  
}

