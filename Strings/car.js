let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//

let n = parseInt(readLine());
let min = 9000000;
let arr=[];
let count = 0;

for(let i=0;i<n;i++){
    arr[i] = parseInt(readLine());
    if(arr[i] >= min){
        ans = i;
        count++;
        console.log(ans);
    }
} if(count < 1){
    console.log(-1);
}