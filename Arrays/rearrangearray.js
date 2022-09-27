let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//
let n = parseInt(readLine());
let arr = [];
for(let i=1;i<=n;i++){
    arr.push(parseInt(readLine())); // [27 -1 21 93 -44]
}
let index = [];
for(let j=1;j<=n;j++){
    index.push(parseInt(readLine()));  // [0 1 2 2 1]
}

let new_arr = [];

let temp = 0;                         // index [0 1 2 2 1] arr:[27 -1 21 93 -44]
for(let i=0;i<n;i++){                // 0 1 2 3 4 // ans: 27 -44 -1 93 21
     if(new_arr[index[i]] == undefined){
        new_arr[i]=(arr[index[i]]);  // newarr=[27,-1,21,]
        
     }                                          // i=3
     else if(new_arr[index[i]] != undefined){
     new_arr.splice(index[i],0,arr[i]);    // newarr.splice(3,0,)
     }
} 
for(i in new_arr){
    console.log(new_arr[i]);
}

