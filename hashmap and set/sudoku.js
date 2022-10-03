let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// 

function validateRow(board, row){
    let set = new Set();
    for(let i = 0; i<9; i++){
        if(set.has(board[row][i]))
            return false;
        if(board[row][i] != '.')
            set.add(board[row][i]);
    }
    return true;
}
 
function validateCol(board, col){
    let set = new Set();
    for(let i = 0; i<9; i++){
        if(set.has(board[i][col]))
            return false;
        if(board[i][col] != '.')
            set.add(board[i][col]);
    }
    return true;
}
 
function validateBox(board, startRow, startCol){
    let set = new Set();
    for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
            let val = board[i + startRow][j + startCol];
            if(set.has(val))
                return false;
            if(val != '.')
                set.add(val);
        }
    }
    return true;
}

function isValid(board, row, col){
    return validateRow(board, row) && validateCol(board, col)
    && validateBox(board, row - row % 3, col - col % 3);
 }
  
 function isValidSudoku(board){
     for(let i = 0; i<9; i++){
         for(let j = 0; j<9; j++){
             if(!isValid(board, i, j))
                 return false;
         }
     }
     return true;
 }
  
 let board = [];
for(let i=0;i<9;i++){
    let subarr = [];
    subarr.push(readLine().split(" "));
    
    board.push(subarr);
}
  
 console.log(isValidSudoku(board));
  
