let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//  maxdial
// Question give a sorted array 
 // print the max repeating element
 // if there are more than two elements repeating print them in ascending order
 let n = parseInt(readLine());
let matrix = [];
for (let i=0;i<n;i++){
    matrix.push(readLine().split(" "));
}
// ROTATE MATRIX
let rot = []
for(let i=0;i<matrix[0].length;i++){
    let sub = [];
    for(let j=matrix.length-1;j>=0;j--){
        sub.push(matrix[j][i])
    }
    rot.push(sub);
}
console.log(rot.length);
for(let i=0;i<rot.length;i++){
    console.log(...rot[i]);
}
 /*
 input
 3
1 2 3 4
5 6 7 8
9 10 11 12
output
 4
 9 5 1
 10 6 2
 11 7 3
 12 8 4 */