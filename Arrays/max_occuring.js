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
 // if there are no max elements print -1 

// Driver program

 

// JavaScript program to find the most frequent element
 let n = parseInt(readLine());
 let arr = [];
 for(let i=1;i<=n;i++){
    arr.push(parseInt(readLine()));
 }
 console.log(arr);

 let maxcount = 1;
 let count = 1;
 for(let i=1;i<arr.length;i++){
    if(arr[i-1] === arr[i]){
        count++
    }else {
        maxcount = Math.max(maxcount,count);
        count = 1;
    }
 }
 if (arr.length == 0){
    console.log(-1);
 }else
 count = 1 
    for(let i=1;i<arr.length;i++){
        if(arr[i-1] === arr[i]){
            count++
        } else {
            if (count == maxcount){
                console.log(arr[i-1]);
               
            }
            count = 1;
        } 
 
/*if(count == maxcount){
    console.log(arr[i-1])
}*/
    }