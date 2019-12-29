//5) Scale riddle. With 8 balls  EXAM [1,1,1,1,2,1,1,1]. One of the items will be change to two. Indexes are t be chosen at random. Use compressions only two times.

function Marble(value, index) {
  this.index = index;
  this.value = value;
}

let marbleList = [];

let marbles = [1, 1, 1, 1, 1, 1, 1, 1];
let lMarbles = [];
let rMarbles = [];

let setHeavyMarble = function(heavyIndex) {
  if (!heavyIndex) {
    let randomMarbleIndex = Math.floor(Math.random() * marbles.length);
    marbles[randomMarbleIndex] = 2;
  } else {
    marbles[heavyIndex] = 2;
  }

  marbleList = marbles.map((value, index) => {
    return new Marble(value, index);
  });

  lMarbles = [marbleList[0], marbleList[1], marbleList[2]];
  rMarbles = [marbleList[3], marbleList[4], marbleList[5]];
};

let sumTheWeight = function(m) {
  let sum = 0;
  m.forEach(marble => {
    sum += marble.value;
  });
  return sum;
};

let compareTheWeight = function() {
  let leftArm = sumTheWeight(lMarbles);
  let rightArm = sumTheWeight(rMarbles);
  console.log(
    "Weight of each arm: " + "(" + leftArm + ")   ___   (" + rightArm + ")"
  );
  if (leftArm > rightArm) {
    console.log("Heavier marble is on the left arm!");
    secondComparison(lMarbles);
  } else if (rightArm > leftArm) {
    console.log("Heavier marble is on the right arm!");
    secondComparison(rMarbles);
  } else {
    console.log(
      "Marbles are equal - the heaviest marble has to be in the 2 marbles that are not on the scale..."
    );
    console.log("3. Second comparison: compare 2 remaining marbles.");
    console.log(marbleList[6].value + "  ___  " + marbleList[7].value);
    if (marbleList[6].value > marbleList[7].value) {
      console.log("Heaviest marble is of index 6");
    } else {
      console.log("Heaviest marble is of index 7");
    }
  }
};

let secondComparison = function(marbles) {
  console.log(
    "3. Second comparison: compare two first marbles from the heavier arm."
  );
  console.log(
    marbles[0].value +
      "  ___  " +
      marbles[1].value +
      "                    //third marble: " +
      marbles[2].value
  );
  if (marbles[0].value > marbles[1].value) {
    console.log(
      "Heavier marble is on the left arm! Marble index: " + marbles[0].index
    );
  } else if (marbles[1].value > marbles[0].value) {
    console.log(
      "Heavier marble is on the right arm! Marble index: " + marbles[1].index
    );
  } else {
    console.log(
      "Marbles are equal - the heaviest marble is the third of index " +
        marbles[2].index
    );
  }
};

setHeavyMarble(2);
console.log("MARBLES STARTER PACK: ");
console.table(marbles);
console.log("1. Grab 6 marbles, put 3 of them on each side of the scale... ");
console.log(
  lMarbles[0].value,
  lMarbles[1].value,
  lMarbles[2].value + "   ____    " + rMarbles[0].value,
  rMarbles[1].value,
  rMarbles[2].value + "         //marbles left: " + marbleList[6].value,
  marbleList[7].value
);

console.log("2. Is one side heavier than the other? ");
compareTheWeight();
