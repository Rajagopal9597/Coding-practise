/* Special Range
Given a range, as [m, n] both inclusive, print all non-negative integers in the range.

Input
First line contains an integer which is starting value of range, say m

Second line contains an integer which is ending value of range, say n

Output
Print all non-negative integers in that range. One integer per line.

If no such integers exist, print -1.

Example
Input:

-5

4

Output:

0

1

2

3

4  */
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

let m = parseInt(readLine());
let n = parseInt(readLine());
let count = 0;
for(let i=m;i<=n;i++){
	if(i>=0){
		console.log(i);
		count++;
		}
		}
if(count == 0){
    console.log("-1");
}