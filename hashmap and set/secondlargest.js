let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//

let n = parseInt(readLine());
let arr = [];
for(let i=0;i<n;i++){
    arr[i] = parseInt(readLine());
}
arr = arr.sort((a,b) => a-b);
console.log(arr[n-2]);