function getPhase(board) {
  var resultArr = [];
  for (var i = 0; i < board.length; i++) {
    if (board[i] == 'X') {board[i] = 1;}
    else if (board[i] == '0') {board[i] = -1;} 
    else {board[i] = 0;}
  }
  resultArr[0] = board[0] + board[1] + board[2];
  resultArr[1] = board[3] + board[4] + board[5];
  resultArr[2] = board[6] + board[7] + board[8];
  resultArr[3] = board[0] + board[3] + board[6];
  resultArr[4] = board[1] + board[4] + board[7];
  resultArr[5] = board[2] + board[5] + board[8];
  resultArr[6] = board[0] + board[4] + board[8];
  resultArr[7] = board[2] + board[4] + board[6];
  var result;
  if (board.includes(0)) {
    result = 'progress';
  } else {
    result = 'draw';
  }
  if (resultArr.includes(-3)) {
    result = 'o_win';
  } else if (resultArr.includes(3)) {
    result = 'x_win';
  }
  return result;
}
  // write your code here
  // possible return values: 'progress', 'draw' 'x_win', 'o_win'

// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = getPhase);