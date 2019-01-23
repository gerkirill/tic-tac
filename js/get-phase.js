function getPhase(board) {

  for (var i = 0; i <= 2; i++) {
    if (board[i] == board[3 + i] && board[i] == board[6 + i] && board[i] != '-') return board[i] + '_win';
    if (board[i * 3] == board[1 + i * 3] && board[i * 3] == board[2 + i * 3] && board[i * 3] != '-') return board[i * 3] + '_win';
  }
  if (board[0] == board[4] && board[0] == board[8] && board[0] != '-') return board[0] + '_win';
  if (board[2] == board[4] && board[2] == board[6] && board[2] != '-') return board[2] + '_win';

  if (board.indexOf('-') != -1) return 'progress'; 

  return 'draw';
}

// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = getPhase);