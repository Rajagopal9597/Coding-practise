let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// 
let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
let l = parseInt(readLine());
let map = new Map();
for(let i=0;i<arr.length;i++){
    if(!map.has(arr[i])){
        map.set(arr[i],1);
    }else{
        map.set(arr[i],map.get(arr[i])+1);
    }
}
let cost = 0;
for(let i=0;i<l;i++){
    let shoe = readLine().split(" ").map(Number);
    if(map.has(shoe[0]) && map.get(shoe[0]) > 0){
        cost += shoe[1];
        map.set(shoe[0],map.get(shoe[0])-1);
    }
}console.log(cost);

