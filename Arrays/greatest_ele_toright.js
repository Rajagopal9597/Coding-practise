/*submitting enabled till: August 25, 2022 22:05
Steep array
Given a list of integers. The steepness score of an index i is computed in the following way-

Steepness Score(i) =  (maximum element to the right of index i (including i) )- A[i]
Find out the total steepness score of the array, i.e - sum of steepness scores of each index in the array.

Constraints
1<= length of array<= 100000
Input
First line of the input contains N, the size of the array. the second line contains the N space separated integers representing the N elements of the array.

Output
print the total steepness score of the array.

Example
Input:

5
1 2 3 5 4
Output:

9
Explanation:

for 1-> greatest element to right of 1 including 1 is 5, SS= 5-1=4
for 2-> greatest element to right of 2 including 2 is 5, SS= 5-2=3
for 3-> greatest element to right of 3 including 3 is 5, SS= 5-3=2
for 5-> greatest element to right of 5 including 5 is 5, SS= 5-5=0
for 4-> greatest element to right of 4 including 4 is 4, SS= 4-4=0

hence total SS= 4+3+2=9 */
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
let arr = readLine().split(" ");
for(let i in arr){
    arr[i] = Number(arr[i]);
}console.log(arr);

let max = arr[n-1]; // 4
let sum = 0;
for(let i=(n-1);i>=0;i--){  // 4 3 2 1
     let j = arr.length - i -1;// 4-4
    let newmax = Math.max(max,arr[i]);
    sum += newmax - arr[j] ;
    max = newmax ;
}
console.log(sum);

