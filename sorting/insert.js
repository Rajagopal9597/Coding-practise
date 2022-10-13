/*Insert in Between
You have been given a sorted array arr and one integer x. You need to insert x into the given array, such that the array still remains sorted.

Input
Two space seperated values, denoting n and x respectively. One line containing n space seperated values, denoting the elements of the array.

Output
Resultant array.

Example
Input1:

5 3
1 2 3 4 5
Output1:

1 2 3 3 4 5*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
function insertionSort(arr){ // 5 10 2 4 -12
    for(let i=0;i<arr.length;i++){
        let key=arr[i]; // 5 10
        let j=i-1;  // -1 0
        while( j>=0 && arr[j]>key){ // 
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key; // 5
    }
}


function convertToNumber(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
    }
}

let T=parseInt(readLine());
while(T--){
    let N=parseInt(readLine());
    let arr=readLine().split(' ');
    convertToNumber(arr);
    insertionSort(arr);
    console.log(...arr);
}

function insertionSort(arr,start){
    for(let i=start;i<arr.length;i++){
        let key=arr[i];
        let j=i-1; 
        while( j>=start && arr[j]>key){ 
            arr[j+1]=arr[j];    
            j--;
        }
        arr[j+1]=key; 
    }
}

let arr=readLine().split(""); 
insertionSort(arr,parseInt(arr.length/2));
console.log(arr.join(""))