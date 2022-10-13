/*Insertion Sort
Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

To sort an array of size n in ascending order:

Iterate from arr[1] to arr[n] over the array.
Compare the current element (key) to its predecessor.
If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
Implement this logic to complete insertionSort function.

Input
First line contains one integer t, denoting number of testcases. Its is followed t lines:

First line of each testcase contains one integer denoting n.
Second line of each testcase contains n space seperated integers, denoting the elements of the array.
Output
One line for each testcase, denoting the space seperated values of sorted array.

Example
Input:

2
5
5 10 2 4 -12
4
12 89 90 7
Output:

-12 2 4 5 10
7 12 89 90
*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n = parseInt(readLine());
while(n--){
    let len = parseInt(readLine());
    let arr = readLine().split(" ").map(Number);
    console.log(...(sortarr(arr)));
}
function sortarr(arr){
    arr.sort((a,b) => a-b);
    return arr;
}