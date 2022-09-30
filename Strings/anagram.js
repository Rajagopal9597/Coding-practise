let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//

let str = readLine().split("");

let str2 = readLine().split("");


str = sortString(str);
str2 = sortString(str2);

let j1 = '';
let j2 = '';
for(let i=0;i<str.length;i++){
    j1 += str[i];
    j2 += str2[i];
}
let compare = j1.localeCompare(j2);
if(compare == 0){
    console.log(1);
} else {
    console.log(0);
}

function sortString(str){
    let a = str;
for(let i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
     if(a[i]>a[j]){
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;} 
    }
}return a;
}