const assert = require('assert');
const renderHint = require('../js/render-hint');


describe('#renderHint()', function() {

  xit('should be a function', function() {
    assert.deepEqual(typeof renderHint, 'function');
  })

  xit('should render "Next move: x"', function() {
    assert.deepEqual(renderHint('x', 'progress'), 'Next move: x');
  });

  xit('should render "Next move: o"', function() {
   
  });

  xit('should render "It is a draw"', function() {
    
  });

  xit('should render "x wins"', function() {
    
  });

  xit('should render "o wins"', function() {
    
  });
  
})