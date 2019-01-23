function renderBoard(board) {
  // write your code here
  var currentBord = board.map(cell => '<div>' + cell +'</div>');
  return currentBord;
}

// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = renderBoard);
