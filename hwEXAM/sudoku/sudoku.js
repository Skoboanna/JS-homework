let sudoku = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0]
];

function isNumberInColumn(columnNr, number) {
  for (let i = 0; i < sudoku.length - 1; i++) {
    if (sudoku[i][columnNr] === number) {
      return true;
    }
  }
  return false;
}

function isNumberInRow(rowNr, number) {
  for (let i = 0; i < sudoku.length - 1; i++) {
    if (sudoku[rowNr][i] === number) {
      return true;
    }
  }
  return false;
}

function isNumberInSquare(rowNr, columnNr, number) {
  let squareStartRow = rowNr - (rowNr % 3);
  let columnStartRow = columnNr - (columnNr % 3);
  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      if (sudoku[row + squareStartRow][column + columnStartRow] === number) {
        return true;
      }
    }
  }
  return false;
}

function canAddTheNumber(rowNr, columnNr, number) {
  return (
    !isNumberInRow(rowNr, number) &&
    !isNumberInColumn(columnNr, number) &&
    !isNumberInSquare(rowNr, columnNr, number)
  );
}

function canSolveSudoku() {
  for (let row = 0; row < sudoku.length; row++) {
    for (let column = 0; column < sudoku.length; column++) {
      if (sudoku[row][column] === 0) {
        for (let number = 1; number <= 9; number++) {
          if (canAddTheNumber(row, column, number)) {
            sudoku[row][column] = number;
            if (canSolveSudoku()) {
              return true;
            } else {
              sudoku[row][column] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function logSudoku() {
  let columnString = "";
  for (let row = 0; row < sudoku.length; row++) {
    for (let column = 0; column < sudoku.length; column++) {
      if (column === 3 || column === 6) {
        columnString += " | ";
      }
      columnString += sudoku[row][column] + " ";
    }
    console.log(columnString);
    if (row === 2 || row === 5) {
      columnString = "_____";
      for (let i = 0; i < sudoku.length; i++) {
        columnString += "__";
      }
      console.log(columnString);
    }
    columnString = "";
  }
}

if (canSolveSudoku()) {
  logSudoku();
} else {
  console.log("Sudoku can't be solved!");
}
