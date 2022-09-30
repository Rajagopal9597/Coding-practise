/*Largest
Given an array A of size n.

The task is to complete the largestElement function. It should return the largest element present in the given array.

Note:
DO NOT use any inbuilt function.
Array may contain duplicate elements.
Input
First line contains one integer, denoting n. The next line contains n space seperated integers, denoting the elements of the given array.

Output
One Integer, denoting the result.

Example
Input1:

5
1 8 7 56 90
Output1:

90
Explanation1:

The largest element of given array [1, 8, 7, 56, 90] is 90. */

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function largestElement(A){
	let max = A[0];
	for(let i=0;i<n;i++){
		if(A[i]>max){
			max = A[i];
		}
	} return max;
    // Code here
}
// --------- Do NOT edit Below this line -----------
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  } 
}

let n = parseInt(readLine());
let A=readLine().split(" ");
ConvertToNumber(A);
console.log(largestElement(A));