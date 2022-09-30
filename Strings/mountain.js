let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//
let n = parseInt(readLine());
for(let i=0;i<n;i++){
    let len = parseInt(readLine());
    let str = readLine().split("");
    let func = valley(len,str);
    console.log(func);
}
function valley(len,str){
let output = 0;
let count = 0;
for(let i=0;i<len;i++){
    if(str[i] == 'U'){
        count++;
    }if(str[i] == 'D'){
        count--;
    }
    if(count == 0 && str[i] == 'U'){
        output++;
    }
}return output
}