/*let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
} */

// selection sort
let arr = [5,10,24,12,0];
let n = arr.length;
for(let i=0;i<n-1;i++){
    let minidx = i ; // 0
    for(let j=i+1;j<n;j++){ // 1
        if(arr[j] < arr[i]){  // 
           minidx = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[minidx];
    arr[minidx] = temp;
}console.log(arr);