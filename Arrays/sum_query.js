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
 let a = readLine().split(" ");
let n = parseInt(a[0]);
let q = parseInt(a[1]);
let arr = readLine().split(" ");
for(i in arr){
    arr[i] = Number(arr[i]);
}
let temp = 0;
for(let i=1;i<=q;i++){
   temp = readLine().split(" ");
   console.log(requiredsum(temp[0],temp[1],arr));
}

function requiredsum(start,end,arr){
    let sum = 0;
    for(let i=parseInt(start);i<=parseInt(end);i++){
        sum += arr[i] ;
    } return sum;
}
/* input :
5 2

20 -5 33 0 87

2 4

0 3

output :

120
48 */