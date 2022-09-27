/*Example
Input: 121

Output: True

Input: 10

Output: False
solve usin while loop */
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = readLine();
let original = n.split("");
let rev = original.reverse();
if (original == rev){
    console.log("True");
}else{
    console.log("False");
} 