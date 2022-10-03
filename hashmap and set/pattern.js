/*let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// */

let pattern =  ["a","b","b","a"];  //readLine().split(""); 
let str =  ["dog","cat","cat","dog"]; // readLine().split(" "); //
let patternmap = new Map();
let strmap = new Map();
let ans = "true";
if(pattern.length != str.length){
    ans = "false";
}/*
for(let i=0;i<pattern.length;i++){
  if(patternmap.has(pattern[i]) && patternmap.get(pattern[i]) !== str[i] ||
    strmap.has(str[i]) && strmap.get(str[i]) !== pattern[i]){
        ans = "false"
    }
    patternmap.set(pattern[i],str[i]);  // (a,dog),(b,cat)
    strmap.set(str[i],pattern[i]);  // (dog,a),(cat,b)
 
} console.log(ans); */

for(let i=0;i<str.length;i++){
   { if(patternmap.has(pattern[i])){
        patternmap.set(pattern[i],patternmap.get(pattern[i])+1);
    }else{
        patternmap.set(pattern[i],1);
    }}

    {if(strmap.has(str[i])){
        strmap.set(str[i],strmap.get(str[i])+1);
    }else{
    strmap.set(str[i],1);
    }}
}
let anim = [];
for(let i of strmap.values()){
     anim.push(i);
}console.log(anim);
let patr = [];
for(let i of patternmap.values()){
    patr.push(i);
}
let count = 0;
for(let i=0;i<patr.length;i++){
    if(anim[i] == patr[i]){
        count++;
    }
}if(count == patr.length){
    console.log("true");
}else{
    console.log("false");
}