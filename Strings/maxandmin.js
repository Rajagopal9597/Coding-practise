let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//
let n = parseInt(readLine());  // 1
for(let i=0;i<n;i++){
let mn = readLine().split(" ");  // 5 3
let arr = readLine().split(" ").map(Number);  // 
let a = parseInt(mn[0]) - parseInt(mn[1]);   // 2
let ans  = (sumdiff(arr,a));
console.log(ans);

}

function sumdiff(arr,a){
    let max = 0;
    let min = 0;
    for(let i=0,j=(arr.length-1);i<a;i++,j--){
        max += arr[j];
        min += arr[i]
    }
    let difference = max - min;
{if(difference > 0){
    return difference;
}else{
    return difference*-1;
}}
}

/*
function maxsum(arr,a){
    let l = arr.length - 1;
    let j =(l - a);  // 5 - 2 //3
    let sum = 0;
    for(let i=l;i > j;i--){
       sum += arr[i];
    }return sum;
}

function minsum(arr,a){
    let sum = 0;
    for(let i=0;i<2;i++){
        sum += arr[i];
    }return sum;
} */
/*average
get_marks 
3
get_marks 
10*/