let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// 
let n = parseInt(readLine());
let matrix1 = [];
for(let i=0;i<n;i++){
    matrix1.push(readLine().split(" ").map(Number));
} 
let m = parseInt(readLine());
let matrix2 = [];
for(let i=0;i<n;i++){
    matrix2.push(readLine().split(" ").map(Number));
}
if (m !== n || matrix1[0].length !== matrix2[0].length){
    console.log(-1);
}
else{
let sum = [];
for(let i=0;i<matrix1[0].length;i++){
     let sub = [];
    for(let j=0;j<matrix1.length;j++){
       sub.push(matrix1[i][j] + matrix2[i][j]);
    }sum.push(sub);
}
for(let i=0;i<sum.length;i++){
    console.log(...sum[i]);
}
}