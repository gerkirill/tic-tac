function renderBoard(board) {
  // write your code here
  return board.map(cell => `<div>${cell}</div>`).join('');
}

// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = renderBoard);