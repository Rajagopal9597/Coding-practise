let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//
let n = parseInt(readLine());
let map = new Map();
let map2 = new Map();
for(let i=0;i<n;i++){
    let arr = readLine().split(" ");
    if(!map.has(arr[1]) && !map2.has(arr[0])){
        map = map.set(arr[1],1);
        map2 = map2.set(arr[0],1);
     }else if (map.has(arr[1]) && !map2.has(arr[0])) {
        map = map.set(arr[1],map.get(arr[1])+1);
     }
    
    }
    let max = 1;
    for(let [key, value] of map.entries()){
        if(value>max){
            max = value;
        }
        
    }
    for (let [key, value] of map.entries()) {
        if(value == max){
           console.log(key);
           break;
        }
   }
    
    console.log(map.get('football'));
