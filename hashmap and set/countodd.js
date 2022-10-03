const { FORMERR } = require("dns");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// 
let n = parseInt(readLine());
n = 2*n + 1;
let arr = readLine().split(" ").map(Number);
let map = new Map();
for(let i=0;i<n;i++){
  if(map.has(arr[i])){
    map.set(arr[i],map.get(arr[i])+1);
  }else{
    map.set(arr[i],1);
  }
}
for (let [key, value] of map.entries()) {
     if(value % 2 !== 0){
        console.log(key);
     }
}
