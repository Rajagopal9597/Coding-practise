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
    let st = readLine();
    console.log(minInsertion(st))
}

function minInsertion(st){
    let count = new Array(26).fill(0);
    for(let i=0;i<st.length;i++){
        let idx = st.charCodeAt(i) - 97;
        count[idx]++
    }

let unpaired = 0;
for(let i=0;i<count.length;i++){
    if(count[i] % 2 !== 0){
        unpaired++;
    }
}
if(unpaired > 0){
    return unpaired-1;
}
 return 0;
}