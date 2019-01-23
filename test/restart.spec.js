const assert = require('assert');
const restart = require('../js/restart');

describe('#restart()', function() {

  it('should return game-state with empty board and current: x', function() {
    assert.deepEqual(restart(), {
      board: ['-','-','-','-','-','-','-','-','-'],
      current:  'x',
    })
  });

})