//  4) * Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck.
//  After that the solution is to tell us what is the best poker set. EXAM

let colors = {
  club: "c",
  diamond: "d",
  heart: "h",
  spade: "s"
};

function Card(value, color) {
  this.value = value;
  this.color = color;
}

let c = [1, 1, 1, 1, 1];
let cards = c.map(() => {
  return new Card(10, colors.club);
});
//** SET CARDS VALUES AND COLORS */
//cards[2].color = colors.heart;
//cards[1].color = colors.spade;
//cards[4].color = colors.diamond;

cards[0].value = 13;
cards[1].value = 10;
cards[2].value = 12;
cards[3].value = 11;
cards[4].value = 14;

//* E/O CARDS VALUES AND COLORS */

function sortByColor(cards) {
  let pokerHand = cards;
  pokerHand.sort((a, b) =>
    a.color > b.color ? 1 : b.color > a.color ? -1 : 0
  ); // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  pokerHand.forEach(card => {
    console.log(card.color, card.value);
  });
  return pokerHand;
}

function sortByValue(cards) {
  let pokerHand = cards;
  pokerHand.sort((a, b) =>
    a.value > b.value ? 1 : b.value > a.value ? -1 : 0
  );
  pokerHand.forEach(card => {
    console.log(card.color, card.value);
  });
  return pokerHand;
}

function isDifferentColor(cards) {
  // The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
  // array.some() method checks if there is at least one value in an array that matches criteria and returns a boolean
  let color = cards[0].color;
  return cards.some(function(card) {
    return card.color !== color;
  });
}

// POKER HAND RANKINGS
// https://www.cardplayer.com/rules-of-poker/hand-rankings

function isRoyalFlush(cards) {
  // A, K, Q, J, 10, all the same suit
  let isRoyalFlush = false;
  if (!isDifferentColor(cards)) {
    let pokerHand = sortByValue(cards);
    if (pokerHand[0].value == 10 && pokerHand[4].value == 14) {
      isRoyalFlush = true;
    }
  }
  return isRoyalFlush;
}

function isStraightFlush(cards) {
  // Five cards in a sequence, all in the same suit.
  let isStraightFlush = false;
  if (!isDifferentColor(cards)) {
    let pokerHand = sortByValue(cards);
    if (pokerHand[4].value - pokerHand[0].value == 4) {
      isStraightFlush = true;
    }
  }
  return isStraightFlush;
}

function isFourOfAKind(cards) {
  // All four cards of the same rank
  let isFourOfAKind;
  let pokerHand = sortByValue(cards);
  if (
    pokerHand[0].value == pokerHand[3].value ||
    pokerHand[1].value == pokerHand[4].value
  ) {
    isFourOfAKind = true;
  } else isFourOfAKind = false;
  return isFourOfAKind;
}

function isFullHouse(cards) {
  // Three of a kind with a pair.
  let isFullHouse;
  let pokerHand = sortByValue(cards);
  if (
    pokerHand[0].value == pokerHand[1].value &&
    pokerHand[2].value == pokerHand[4].value
  ) {
    isFullHouse = true;
  } else if (
    pokerHand[3].value == pokerHand[4].value &&
    pokerHand[0].value == pokerHand[2].value
  ) {
    isFullHouse = true;
  } else isFullHouse = false;
  return isFullHouse;
}

function isFlush(cards) {
  let isFlush = true;
  // Any five cards of the same suit, but not in a sequence.
  if (!isDifferentColor(cards)) {
    let pokerHand = sortByValue(cards);
    for (let i = 0; i < cards.length - 1; i++) {
      if (pokerHand[i + 1].value - pokerHand[i].value <= 1) {
        isFlush = false;
      }
    }
  } else isFlush = false;
  return isFlush;
}

console.log(isRoyalFlush(cards));
// console.log(isStraightFlush(cards));
// console.log(isFourOfAKind(cards));
// console.log(isFullHouse(cards));
// console.log(isFlush(cards));
