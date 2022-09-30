let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//

let n = parseInt(readLine());
let arr = ['',"Z","Y","X","W","V","U","T","S","R","Q","P","O","N","M","L","K","J","I","H","G","F","E","D","C","B","A"];
for(let i=0;i<n;i++){
    let num = parseInt(readLine()); // 1
    let c = alphabets(num,arr); // 1
    console.log(c);
}
function alphabets(num,arr){
    let str = "";
  if(num < 27){
    str = arr[num] 
  }
  if(num > 26){
    let a = num % 26;
    let d = num - a;
    let b = d/26;
    str = arr[b]+arr[a];
   
    }return str;
  }
