let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//

let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number).sort((a,b) => a-b);
let map = new Map();
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i]) + 1);
    }else{
        map.set(arr[i],1);
    }

}
let pairs = 0;
for(let i of map.values()){
    let temp = Math.floor(i/2);
    pairs += temp;
}console.log(pairs);