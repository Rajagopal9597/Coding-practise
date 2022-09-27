let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
console.log(arr);
let ans = [];
let maxcount = 0;
for(let i=0;i<n;i++){
    let count = 1;
    for(let j=i+1;j<n;j++){
        if(arr[i] == arr[j]){
            count++;
        }else{
            break;
        }
    }if(count > maxcount){
        maxcount = count;
        ans = [];
        ans.push(arr[i]);
    }else if(count == maxcount){
        ans.push(arr[i]);
    }
}
console.log(ans);