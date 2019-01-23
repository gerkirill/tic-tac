var gameState = {
  board: ['-','-','-','-','-','-','-','-','-'],
  current:  'x',

};

function restart() {
  // write your code here
  return gameState;
}

// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = restart);