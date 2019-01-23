const assert = require('assert');
const renderBoard = require('../js/render-board');

describe('#renderBoard()', function() {

  xit('should be a function', function() {
    assert.deepEqual(typeof move, 'function');
  })

  xit('should render empty board', function() {

    const board = [
      '-', '-', '-', 
      '-', '-', '-', 
      '-', '-', '-', 
    ]

  });

  xit('should render board with single x', function() {

    const board = [
      '-', '-', '-', 
      '-', 'x', '-', 
      '-', '-', '-', 
    ]
  });
})