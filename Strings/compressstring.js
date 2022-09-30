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
  let string = readLine().split("");
  console.log(compressstring(string));
}
function compressstring(string){
  let count = 1;
  let s = string[0];
  for(let i=1; i < string.length; i++){
    if(string[i] == string[i - 1]){
      count++;
      if (i == string.length - 1){
      s = s + count;}
    }
  
  else {
    if (count > 1){
      s = s + count + string[i];
      count =  1;
    }
    else {
      s = s + string[i];
    }
  }
}
return s
}

