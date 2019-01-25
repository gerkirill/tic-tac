// current is either 'x' or 'o'
// phase is one of 'progress', 'draw' 'x_win', 'o_win'
function renderHint(current, phase) {
  if (phase=='progress') return 'Next move '+ current.toUpperCase()
  if (phase == 'draw') {
    return 'It is a draw';
  } else if (phase == 'x_win') {
    return 'X wins';
  } else if (phase == 'o_win')
  return 'O wins';


}

// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = renderHint);