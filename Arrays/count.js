/* count the number of even digits
input
5
23 1 2 44 56
output
3 */
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}
let n = parseInt(readLine());
let arr = readLine().split(" ");
for(let i in arr){
    arr[i] = Number(arr[i]);
}

let even = 0;
for(let i=0;i<arr.length;i++){
    let num = arr[i];
    let count = 0;
    while(num > 0){
        let a = num % 10;
        count++;
        num = parseInt(num / 10)
    }
    if(count % 2 == 0){
             even++
    }
    
}console.log(even);