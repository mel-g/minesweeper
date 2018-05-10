const generatePlayerBoard = (numberOfRows, numberOfColums) => {
  let board = [];
  for (let Rows = 0; Rows<numberOfRows; Rows++) {
    let row = [];
    for (let Columns = 0; Columns<numberOfColumns; Columns++) {
      row.push(' ');
    };
    board.push(row);
  };
  return(board);
};

generatePlayerBoard(4, 5);
generatePlayerBoard(2, 3);
generatePlayerBoard(7, 7);
