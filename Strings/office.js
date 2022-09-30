let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//
let str = readLine().split(" ");
let n = str.length;
let arr = readLine().split(" ");
let sum = 0;
for(let i=0;i<n;i++){
    sum += parseInt(arr[i]) ;
}
if((sum/n) < 5 ){
    console.log("They fired me")
}
else{
    console.log("I still have a job")
}