let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//
let a = readLine().split(" ");
let l = a.length;
let maxlength = a[0].split("").length;

for(let i=0;i<a.length;i++){
    let ch = a[i].split("").length;
    if(ch > maxlength){
        maxlength = ch;
    }
    
} console.log(maxlength);