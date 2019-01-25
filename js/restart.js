function restart() {
  var gameState = {
    board: ['-','-','-','-','-','-','-','-','-'],
    current:  'x'
  };
  return gameState;
}

// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = restart);