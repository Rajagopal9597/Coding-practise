let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
} //
let n = parseInt(readLine());
let income = [];
for (let i = 0; i < n; i++) {
  income[i] = parseInt(readLine());
}
let children = [];
let index = [];
for (let i = 0; i < n; i++) {
  children[i] = parseInt(readLine());
  if (children[i] > 2) {
    index.push(i);
  }
}
if (index.length == 0) {
  console.log(-1);
} else {
  let avgincome = 0;
  for (let i = 0; i < index.length; i++) {
    avgincome += income[index[i]];
  }
  console.log(avgincome / index.length);
}
