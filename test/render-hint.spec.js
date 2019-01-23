const assert = require('assert');
const renderHint = require('../js/render-hint');


describe('#renderHint()', function() {

  it('should be a function', function() {
    assert.deepEqual(typeof renderHint, 'function');
  })

  it('should render "Next move: x"', function() {
    assert.deepEqual(renderHint('x', 'progress'), 'Next move: x');
  });

  it('should render "Next move: o"', function() {
    assert.deepEqual(renderHint('o', 'progress'), 'Next move: o'); 
  });

  it('should render "It is a draw"', function() {
    assert.deepEqual(renderHint(' ','draw'), 'It is a draw');   
  });

  it('should render "x wins"', function() {
    assert.deepEqual(renderHint('x','x_win'), 'x wins'); 
  });

  it('should render "o wins"', function() {
    assert.deepEqual(renderHint('o','o_win'), 'o wins');     
  });
  
})