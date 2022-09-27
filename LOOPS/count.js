/*Input:

5
10
20
30
40
10
Output:

2
Explanation:

First line contains 5, meaning the sequence has 5 integers.
First element is 10.
In the given sequence, 10 occurs 2 times. So, the output is 2. */

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine()); // 5
let a = parseInt(readLine()); // 10
let count = 1;
for(let i=1;i<n;i++){
 let temp = parseInt(readLine());
if(a == temp){
	count++;
}
}console.log(count);