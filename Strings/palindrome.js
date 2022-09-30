let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//
let a = readLine();
let b = a.toLowerCase();
let st = b.split("");
let rev = []; // [t e n e t]
let count = 0;
for(let i=st.length-1;i>=0;i--){
    rev.push(st[i]);
}
for(let i=0;i<st.length;i++){
    if(st[i] == rev[i]){
        count++
    }
}
if(count == st.length){
    console.log('YES');
}
else{
    console.log('NO');
}