// current is either 'x' or 'o'
// phase is one of 'progress', 'draw' 'x_win', 'o_win'
function renderHint(current, phase) {
  if (current == 'x' && phase == 'progress') {
    return 'Next move: x';
  } else if (current == 'o' && phase == 'progress') {
    return 'Next move: o'; 
  } else if (phase == 'draw') {
    return 'It is a draw';
  } else if (current == 'x' && phase == 'x_win') {
    return 'x wins';
  } else {(current == 'o' && phase == 'o_win') 
    return 'o wins';}

}

// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = renderHint);