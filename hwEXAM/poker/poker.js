//  4) * Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck.
//  After that the solution is to tell us what is the best poker set. EXAM

let handChecker = require("./handChecker");

const colors = {
  club: "club",
  diamond: "diamond",
  heart: "heart",
  spade: "spade"
};

function Card(value, color) {
  this.value = value;
  this.color = color;
}

let hand = [1, 1, 1, 1, 1];
let cards = hand.map(() => {
  return new Card(10, colors.club);
});
//** SET CARDS VALUES AND COLORS */ // TODO
cards[2].color = colors.heart;
// cards[1].color = colors.spade;
//cards[4].color = colors.diamond;

cards[0].value = 5;
cards[1].value = 9;
cards[2].value = 2;
cards[3].value = 7;
cards[4].value = 6;

//* E/O CARDS VALUES AND COLORS */

// POKER HAND RANKINGS
// https://www.cardplayer.com/rules-of-poker/hand-rankings

let pokerChecker = new handChecker(cards);
pokerChecker.showSortedHand();
pokerChecker.findBestPokerHand();
pokerChecker.showBestPokerHand();
