let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//

let n = parseInt(readLine());
if(n <= 0){
    console.log(-1);
} else{
let n1 = 0;
let n2 = 1;

console.log(n1);
if(n==1 || n>1){
console.log(n2);}
let sum = 0
if(n>=2){
for(let i=2;i<n;i++){
    sum = n1 + n2;
    console.log(sum);  // 0+0  0+1 
     n1 = n2;
     n2 = sum;}
      // 0 + 0 // 
    
}///0 1 1 2 3
}