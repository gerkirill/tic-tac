function move(gameState, cellIdx) {
  // write your code here
  if (gameState.board[cellIdx]!='-') return gameState; 
  gameState.board[cellIdx] = gameState.current;
  gameState.current === 'o' ? gameState.current = 'x' : gameState.current = 'o';
  return gameState;
  }

// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = move);