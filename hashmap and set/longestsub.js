/*let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// */

/*
let n = parseInt(readLine());
while(n--){ 
    let s = readLine();
console.log(subarray(s))
function subarray(s){
let startIndex = 0;      // 
const hashMap = new Map();  // Map(0){}
let output = 0;  // 

for (let i = 0; i < s.length; i++) {
    const character = s[i];   // a b
    if (hashMap.has(character)) {
        const index = hashMap.get(character);
        console.log(index);
        const newOutput = i - startIndex + (startIndex > index ? 1 : 0 ); // 3 - 0 + 0
        console.log(newOutput);
        output = Math.max(output, newOutput); //  3
        startIndex = Math.max(startIndex, index); // 1
    } else {
        output = Math.max(output, i - startIndex + 1); //1 3
    }
    
    hashMap.set(character, i + 1);  // {a:1;b:1;c:1;}
}
return output;}
} */


let s = "dvdf";
const map = new Map();
// keeps track of the starting index of the current substring.
let start = 0;
// keeps track of the maximum substring length.
let maxLen = 0;

for(let i = 0; i < s.length; i++) {
    // if the current char was seen, move the start to (1 + the last index of this char)
    // max prevents moving backward, 'start' can only move forward
    if(map.has(s[i])){
     start = Math.max(map.get(s[i]) + 1, start)}  // 1
     
    map.set(s[i], i); // a-0  d-0 v-1
    
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen);  // 1 2 
    
} 

console.log(maxLen);  

