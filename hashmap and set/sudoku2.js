let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// 

let board = [];
for(let i=0;i<9;i++){
    let subarr = [];
    subarr.push(readLine().split(" "));
    
    board.push(subarr);
}
console.log()