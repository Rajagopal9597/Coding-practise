let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let arr = readLine().split(" ");
let k = parseInt(readLine());
for(let i in arr){
    arr[i] = Number(arr[i]);
}console.log(arr);