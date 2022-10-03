let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// 
let n = parseInt(readLine());
let first = 0;
let second = 0;
for(let i=0;i<8;i++){
    let arr = readLine().split(" ").map(Number);
    if(arr[0] == 1){
       first += arr[1];
       if(first == 10){
        console.log(1);
        break;}
    }if(arr[0]  == 2){
       second += arr[1];
       if(second == 10){
        console.log(2);
        break;
    }
    
    }

}