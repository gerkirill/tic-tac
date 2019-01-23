const assert = require('assert');
const getPhase = require('../js/get-phase.js');

describe('#getPhase()', function() {
  var board0 = [
    '-', '-', '0',
    '-', 'X', '-',
    '-', '-', '-',
  ];
  it('should be a function', function() {
    assert.deepEqual(typeof getPhase, 'function');
  })

  var board1 = [
    '-', '-', '0',
    '-', 'X', '-',
    '-', '-', '-',
  ];
  it('should return "progress" when the game is in progress', function() {
    assert.deepEqual(getPhase(board1), 'progress');
  })

  var board2 = [
    '-', 'X', '0',
    '-', 'X', '-',
    '-', 'X', '-',
  ];
  it('should return "x_win" if "x" player wins', function() {
    assert.deepEqual(getPhase(board2), 'x_win');
  })

  var board3 = [
    '0', '0', '0',
    '-', 'X', '-',
    '-', 'X', '-',
  ];
  it('should return "o_win" if "o" player wins', function() {
    assert.deepEqual(getPhase(board3), 'o_win');
  })

  var board4 = [
    '0', '0', 'X',
    'X', 'X', '0',
    '0', '0', 'X',
  ];
  it('should return "draw" in a case of draw', function() {
    assert.deepEqual(getPhase(board4), 'draw');
  })
})