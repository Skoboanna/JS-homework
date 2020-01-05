const winningHand = {
  highCard: "highCard",
  onePair: "onePair",
  twoPair: "twoPair",
  threeOfAKind: "threeOfAKind",
  straight: "straight",
  flush: "flush",
  fullHouse: "fullHouse",
  fourOfAKind: "fourOfAKind",
  straightFlush: "straightFlush",
  royalFlush: "royalFlush"
};

function HandChecker(hand) {
  this.hand = hand;
  this.bestPokerHand = winningHand.highCard;

  this.showSortedHand = function() {
    let pokerHand = this.hand.slice();
    sortByValue(pokerHand);
    pokerHand.forEach(card => {
      console.log(card.color, card.value);
    });
  };

  this.showBestPokerHand = function() {
    if (this.bestPokerHand == winningHand.highCard) {
      console.log(
        "Your winning hand is: " +
          this.bestPokerHand +
          " of value: " +
          this.getHighCard()
      );
    } else {
      console.log("Your winning hand is: " + this.bestPokerHand);
    }
  };

  this.getHighCard = function() {
    let pokerHand = this.hand.slice();
    sortByValue(pokerHand);
    return pokerHand[4].value;
  };

  this.findBestPokerHand = function() {
    if (isRoyalFlush(this.hand)) {
      this.bestPokerHand = winningHand.royalFlush;
    } else if (isStraightFlush(this.hand)) {
      this.bestPokerHand = winningHand.straightFlush;
    } else if (isFourOfAKind(this.hand)) {
      this.bestPokerHand = winningHand.fourOfAKind;
    } else if (isFullHouse(this.hand)) {
      this.bestPokerHand = winningHand.fullHouse;
    } else if (isFlush(this.hand)) {
      this.bestPokerHand = winningHand.flush;
    } else if (isStraight(this.hand)) {
      this.bestPokerHand = winningHand.straight;
    } else if (isThreeOfAKind(this.hand)) {
      this.bestPokerHand = winningHand.threeOfAKind;
    } else if (isTwoPair(this.hand)) {
      this.bestPokerHand = winningHand.twoPair;
    } else if (isPair(this.hand)) {
      this.bestPokerHand = winningHand.onePair;
    } else {
      this.bestPokerHand = winningHand.highCard;
    }
  };
}

function compareCardColor(card1, card2) {
  if (card1.color < card2.color) {
    return -1;
  }
  if (card1.color > card2.color) {
    return 1;
  }
  return 0;
}

function compareCardValue(card1, card2) {
  if (card1.value < card2.value) {
    return -1;
  }
  if (card1.value > card2.value) {
    return 1;
  }
  return 0;
}

function sortByColor(cards) {
  cards.sort(compareCardColor);
  return cards;
}

function sortByValue(cards) {
  cards.sort(compareCardValue);
  return cards;
}

function isDifferentColor(cards) {
  let color = cards[0].color;
  return cards.some(function(card) {
    return card.color !== color;
  });
}

function isRoyalFlush(cards) {
  // A, K, Q, J, 10, all the same suit
  let isRoyalFlush = false;
  if (!isDifferentColor(cards)) {
    let pokerHand = cards.slice();
    sortByValue(pokerHand);
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
    let pokerHand = cards.slice();
    sortByValue(pokerHand);
    isStraightFlush = true;
    for (let i = 0; i < pokerHand.length - 1; i++) {
      if (pokerHand[i + 1].value - pokerHand[i].value != 1) {
        isStraightFlush = false;
      }
    }
  }
  return isStraightFlush;
}

function isFourOfAKind(cards) {
  // All four cards of the same rank
  let isFourOfAKind;
  let pokerHand = cards.slice();
  sortByValue(pokerHand);
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
  let pokerHand = cards.slice();
  sortByValue(pokerHand);
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
    let pokerHand = cards.slice();
    sortByValue(pokerHand);
    for (let i = 0; i < cards.length - 1; i++) {
      if (pokerHand[i + 1].value - pokerHand[i].value <= 1) {
        isFlush = false;
      }
    }
  } else isFlush = false;
  return isFlush;
}

function isStraight(cards) {
  let isStraight = false;
  // Five cards in a sequence, but not of the same suit.
  if (isDifferentColor(cards)) {
    let pokerHand = cards.slice();
    sortByValue(pokerHand);
    isStraight = true;
    for (let i = 0; i < pokerHand.length - 1; i++) {
      if (pokerHand[i + 1].value - pokerHand[i].value != 1) {
        isStraight = false;
      }
    }
  }
  return isStraight;
}

function isThreeOfAKind(cards) {
  // Three cards of the same rank.
  let isThreeOfAKind = false;
  let pokerHand = cards.slice();
  sortByValue(pokerHand);
  if (!isDifferentColor(cards)) {
    if (
      pokerHand[0].value == pokerHand[2].value ||
      pokerHand[1].value == pokerHand[3].value ||
      pokerHand[2].value == pokerHand[4].value
    ) {
      isThreeOfAKind = true;
    } else isThreeOfAKind = false;
  }

  return isThreeOfAKind;
}

function isTwoPair(cards) {
  // Two different pairs
  let isTwoPair = false;
  let pokerHand = cards.slice();
  sortByValue(pokerHand);
  if (
    pokerHand[0].value == pokerHand[1].value &&
    pokerHand[2].value == pokerHand[3].value
  ) {
    if (pokerHand[0].value != pokerHand[2].value) {
      isTwoPair = true;
    }
  } else if (
    pokerHand[1].value == pokerHand[2].value &&
    pokerHand[3].value == pokerHand[4].value
  ) {
    if (pokerHand[1].value != pokerHand[3].value) {
      isTwoPair = true;
    }
  } else if (
    pokerHand[0].value == pokerHand[1].value &&
    pokerHand[3].value == pokerHand[4].value
  ) {
    if (pokerHand[0].value != pokerHand[3].value) {
      isTwoPair = true;
    }
  } else isTwoPair = false;
  return isTwoPair;
}

function isPair(cards) {
  let isPair = false;
  let pokerHand = cards.slice();
  sortByValue(pokerHand);
  for (let i = 0; i < pokerHand.length - 1; i++) {
    if (pokerHand[i].value == pokerHand[i + 1].value) {
      isPair = true;
    }
  }
  return isPair;
}

module.exports = HandChecker;
