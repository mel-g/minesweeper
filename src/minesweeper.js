const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];

  for (let Rows = 0; Rows<numberOfRows; Rows++) {
//why is the below a const and not let?
    const row = [];
    for (let Columns = 0; Columns<numberOfColumns; Columns++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

//when do I need semi-colons?

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let Rows = 0; Rows<numberOfRows; Rows++) {
    let row = [];
    for (let Columns = 0; Columns<numberOfColumns; Columns++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {


  const randomRowIndex = Math.floor(Math.random() * numberOfRows);
  const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
  board[randomRowIndex][randomColumnIndex] = "B";
numberOfBombsPlaced++;
  }

  //An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
  return board;
}

const  printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));

}

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log("Player Board: ");
printBoard(playerBoard);

console.log("Bomb Board: ");
printBoard(bombBoard);
