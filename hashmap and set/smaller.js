let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// 

// input [2 3 7 8 1]
// output [1 2 3 4 0]

let n = parseInt(readLine());
let arr = [];
for(let i=0;i<n;i++){
    arr[i] = parseInt(readLine());
}let small_num = (smallernumb(arr));
for(let i in small_num){
    console.log(small_num[i]);
}

function smallernumb(nums){
    const result=[]
    for(let i=0;i<nums.length;i++){
        let count=0
        for(let j=0;j<nums.length;j++){
            if(nums[j]<nums[i] && j!=i){
                count++;
            }
            
        }
        result.push(count);
    }
    return result;
}