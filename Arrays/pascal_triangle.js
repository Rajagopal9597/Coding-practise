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
let n = parseInt(readLine());   // 5
let res = [];
for(let i=0;i<n;i++){   // i = 0
    let temp=[];           // []
    for(let j=0;j<=i;j++){  // j=0
        if(j==0 || j==i){   // [1]
            temp.push(1);
        }else{
            temp.push(res[i-1][j]+res[i-1][j-1]); // res[0][1] + res[0][0]
        }
    }
    res.push(temp); // res [[1]]  // [[1] [1 1]]
    console.log(res);
};
for(let i=0;i<n;i++){
console.log(res[n-1][i]);}


//    1
  //  1 1
    //1 2 1
    //1 3 3 1
    //1 4 6 4 1
