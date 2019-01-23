const assert = require('assert');
const move = require('../js/move.js');

describe('#move()', function() {

  const gameState = {
    board: [
      '-', '-', 'o',
      '-', 'x', '-',
      '-', '-', '-',
    ],
    current: 'x'
  }

  xit('should be a function', function() {
    assert.deepEqual(typeof move, 'function');
  })

  xit('should make a valid x move', function() {

  });

  xit('should make a valid o move', function() {
    
  });

  xit('should not change game-state if the move is invalid', function() {
    
  });

  // check move outside of the board?
})