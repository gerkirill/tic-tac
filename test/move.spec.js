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

  it('should be a function', function() {
    assert.deepEqual(typeof move, 'function');
  })

  it('should make a valid x move', function() {
    assert.deepEqual(
      move(gameState, 0),
      {
        board: [
          'x', '-', 'o',
          '-', 'x', '-',
          '-', '-', '-',
        ],
        current: 'o'
      }
    );
  });

  it('should make a valid o move', function() {
    assert.deepEqual(
      move(gameState, 5),
      {
        board: [
          'x', '-', 'o',
          '-', 'x', 'o',
          '-', '-', '-',
        ],
        current: 'x'
      }
    );    
  });

  it('should not change game-state if the move is invalid', function() {
    assert.deepEqual(
      move(gameState, 0),
      {
        board: [
          'x', '-', 'o',
          '-', 'x', 'o',
          '-', '-', '-',
        ],
        current: 'o'
      }
    );  
  });

  // check move outside of the board?
})