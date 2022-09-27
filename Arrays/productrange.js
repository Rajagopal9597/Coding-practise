let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking inplet fs = require("fs");
let a = parseInt(readLine());
for(let i=0;i<(a-1);i++){
let n = parseInt(readLine());
let arr = readLine().split(" ");
if (arr.length <= 1){
    console.log(1);
}
else{
for(let i in arr){
    arr[i] = Number(arr[i]);
}
let newarr = [];

for(let i=0;i<n;i++){ 
    
    let g = arr.pop()
   
    let b = sumofproduct(arr);
   newarr.push(b);
   arr.unshift(g);
    
   }console.log(newarr.reverse());
}

function sumofproduct(arr){
     let sum = 1;
    for(let i=0;i<arr.length;i++){
        sum *= arr[i];
        
    }return sum
}
}