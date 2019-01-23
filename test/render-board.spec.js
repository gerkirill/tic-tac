const assert = require('assert');
const renderBoard = require('../js/render-board');

describe('#renderBoard()', function() {

  it('should be a function', function() {
    assert.deepEqual(typeof move, 'function');
  });

  it('should render empty board', function() {

    const board = [
      '-', '-', '-', 
      '-', '-', '-', 
      '-', '-', '-', 
    ]

    assert.deepEqual(renderBoard(board), '<div>-</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div><div>-</div>')

  });

  xit('should render board with single x', function() {

    const board = [
      '-', '-', '-', 
      '-', 'x', '-', 
      '-', '-', '-', 
    ]
  });
})
