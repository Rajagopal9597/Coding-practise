let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// 
 

/*let str = "aabcca";
let map = new Map();
let count = 0;
let num = 0;
for(let i=0;i<str.length;i++){
    if(map.has(str[i])){
       map.set(str[i],map.get(str[i]) + (num += 1));
    }else{
        map.set(str[i],count);
        
    }
    console.log(map);
}
let sum = 0;
for(let i of map.values()){
   sum += i;
}console.log(sum);*/
/*Input:
1
5
abaab
Output:
4 
*/

let n =parseInt(readLine());
while(n--){
    let l = parseInt(readLine());
    let st = readLine();
    console.log(countingstars(l,st));
}
function countingstars(l,st){  // a b a a b = 0 0 1 2 1 = 4
    let map = new Map();
    let res = 0;
    for(let i=0;i<l;i++){
    if(!map.has(st[i])){
        map.set(st[i], 1 ); // a-1 b-1 
    }else{
        res += map.get(st[i]); // 4
        map.set(st[i], 1 + map.get(st[i])); // a-3 b-2
    }

    
 }
return res;
}


   