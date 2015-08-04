var deck = [
 "H1", "H2", "H3",  "H4",  "H5",  "H6", "H7",
 "H8", "H9", "H10", "H11", "H12", "H13",
 "C1", "C2", "C3",  "C4",  "C5",  "C6", "C7",
 "C8", "C9", "C10", "C11", "C12", "C13",
 "S1", "S2", "S3",  "S4",  "S5",  "S6", "S7",
 "S8", "S9", "S10", "S11", "S12", "S13",
 "D1", "D2", "D3",  "D4",  "D5",  "D6", "D7",
 "D8", "D9", "D10", "D11", "D12", "D13"
];

// Required for splitDeck
function shuffleCards(array) {
  var deckCopy = array.slice();
  var shuffled = [];
  while (deckCopy.length > 0) {
    var randomIndex = Math.floor(Math.random() * deckCopy.length);
    shuffled.push(deckCopy[randomIndex]);
    deckCopy.splice(randomIndex, 1);
  }
  return shuffled;
}

function splitDeck() {
  var shuffled = shuffleCards(deck);
  var tempArray = shuffled.slice();
  var fullArray = [];
  for (var i = 0; i < tempArray.length; i += 26) {
      fullArray.push(tempArray.slice(i, i + 26));
  }
  return fullArray;
}

function riffleCards() {
  var deckHalves = splitDeck();
  var half1 = deckHalves[0];
  var half2 = deckHalves[1];
  var choice = Math.floor(Math.random() * 2);
  var riffledCards = [];
  while (half1.length || half2.length) {
      if (choice === 0) {
          choice = 1;
          var tempArray1 = half1.splice(0, Math.floor(Math.random() * 26));
          for (var i = 0; i < tempArray1.length; i++) {
              riffledCards.push(tempArray1[i]);
          }
      } else {
          choice = 0;
          var tempArray2 = half2.splice(0, Math.floor(Math.random() * 26));
          for (var j = 0; j < tempArray2.length; j++) {
              riffledCards.push(tempArray2[j]);
          }
      }
  }
  return riffledCards;
}
shuffleCards(deck);
splitDeck();
riffleCards();
