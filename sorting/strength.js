/*Game of Strength
Andrew is very fond of Maths.He has N boxes with him,in each box there is some value which represents the Strength of the Box.The ith box has strength A[i]. He wants to calculate the Overall Power of the all N Boxes.

Overall Power here means Sum of Absolute Difference of the strengths of the boxes(between each pair of boxes) multiplied by the Maximum strength among N boxes. Since the Overall Power could be a very large number,output the number modulus 10^9+7(1000000007).

Input
First line of the input contains the number of test cases T. It is followed by T test cases. Each test case has 2 lines. First line contains the number of boxes N. It is followed by a line containing N elements where ith element is the strength of Andrew's ith box.

Output
For each test case, output a single number, which is the Overall Power for that testcase.

Example
Input:
2
2
1 2
5
4 5 3 1 2
Output:
2
100*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let testCases = parseInt(readLine());  //2
while (testCases--) {
    let n = parseInt(readLine()); // 5
    let boxes = readLine().split(' ').map(Number); // 4 5 3 1 2
    mergeSort(boxes, 0, boxes.length - 1); // 
    let sum = sumOfDiffStrength(boxes, boxes.length);
    console.log(parseInt((sum * BigInt(boxes[boxes.length - 1])) % 1000000007n));
}
function mergeSort(arr, l, r) { // 4 5 3 1 2 , 0 , 4
    if (l >= r) return;
    let m = l + parseInt((r - l) / 2); // 0 + 2
    mergeSort(arr, l, m); // 
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}
function merge(arr, l, m, r) {
    let i, j, k;
    var n1 = m - l + 1;
    var n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
function sumOfDiffStrength(arr, n) {
    let sum = 0n;
    for (let i = n - 1; i >= 0; i--) {
        sum = BigInt((arr[i] * i) - (arr[i] * (n - i - 1))) + sum;
    }
    return sum;
}