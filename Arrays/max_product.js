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
 let n = parseInt(readLine());
let m = parseInt(readLine());
let arr1= readLine().split(" ");
let arr2= readLine().split(" ");


let max1 = parseInt(arr1[0]);
let min1 = parseInt(arr1[1]);
for(let i=0;i<n;i++){
    if(parseInt(arr1[i])>max1){
        max1 = arr1[i]
    }if(parseInt(arr1[i])<min1){

        min1 = arr1[i];
    }}
    let newmin1 = 0;
    if (min1<0){
     newmin1 = min1 * -1;
    }
    let newmax1 = 0;
    if (newmin1 > max1){
        newmax1 = newmin1;
    }else{
        newmax1 = max1;
    } 
let max2 = parseInt(arr2[0]);
let min2 = parseInt(arr2[1]);
for(let i=0;i<m;i++){
    if(parseInt(arr2[i])>max2){
        max2 = arr2[i]
    }if(parseInt(arr2[i])<min2){

        min2 = arr2[i];
    }
}
let newmin2=0;
if (min2<0){
     newmin2 = min2 * -1;
   }
   let newmax2 = 0;
   if(newmin2 > max2){
       newmax2 = newmin2;
   }else{
       newmax2 = max2;
   }

console.log(newmax1*newmax2);

/*
5
8
-3 4 5 2 1
7 4 2 4 5 3 -10 6

output 
 50 */