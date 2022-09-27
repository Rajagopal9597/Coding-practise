let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//  maxdial
// Question give a sorted array 
 // print the max repeating element
 // if there are more than two elements repeating print them in ascending order

function replaceElements(arr){
    // Implement this function    [17 18 5 4 6 1]
	let max = -1;              // max = -1
for(let i =arr.length -1; i>=0; i--) {  // i=5 4 3 2 1
    let temp = max;                   // temp = -1  , temp = 1  6
    max = Math.max(arr[i], max);
                                     // max(1,-1) = 1, max(6,1) = 6
    arr[i] = temp;                         //arr[5] = -1
                        // 1 = -1 1 6 6 6 18
}return arr;  // 
}
//[18 6 6 6 1 -1]
// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
} //[17 18 5 4 6 1]
let res=replaceElements(arr);
for(elem of res){
  console.log(elem);
} 

