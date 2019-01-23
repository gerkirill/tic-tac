function getPhase(board) {
var arr=[];
arr[0]=[board[0],board[1],board[2]];
arr[1]=[board[3],board[4],board[5]];
arr[2]=[board[6],board[7],board[8]];

for (var i=0;i<=2;i++){
  if (arr[i][0]==arr[i][1] && arr[i][0]==arr[i][2]) return arr[i][0]+'_win';  
}

// if (arr[0][0]==arr[0][1] && arr[0][0]==arr[0][2]) return arr[0][0]+'_win'; else
// if (arr[1][0]==arr[1][1] && arr[1][0]==arr[1][2]) return arr[1][0]+'_win'; else
// if (arr[2][0]==arr[2][1] && arr[2][0]==arr[2][2]) return arr[2][0]+'_win'; else

for (var i=0;i<=2;i++){
  if (arr[0][i]==arr[1][i] && arr[1][i]==arr[2][i]) return arr[0][i]+'_win'; 
}

// if (arr[0][0]==arr[1][0] && arr[1][0]==arr[2][0]) return arr[0][0]+'_win'; else
// if (arr[0][1]==arr[1][1] && arr[1][1]==arr[2][1]) return arr[0][1]+'_win'; else 
// if (arr[0][2]==arr[1][2] && arr[1][2]==arr[2][2]) return arr[0][2]+'_win'; else

if (arr[0][0]==arr[1][4] && arr[0][0]==arr[2][2]) return arr[0][0]+'_win';
if (arr[0][2]==arr[1][4] && arr[0][2]==arr[2][0]) return arr[0][2]+'_win';

if (board.indexOf('0')>0) return 'progress'; else 
return 'draw';

  // write your code here
  // possible return values: 'progress', 'draw' 'x_win', 'o_win'
}
//    x 0 x     x 0 0
//    0 x 0     0 x 0
//    x 0 0     x 0 x
// DON't modify below this line !!!
typeof module !== 'undefined' && (module.exports = getPhase);