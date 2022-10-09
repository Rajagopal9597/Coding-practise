/*input:
test string
output:
s, count = 2 
t, count = 3 */

let st = "test string";
let map = new Map();
for(let i=0;i<st.length;i++){
    if(map.has(st[i])){
        map.set(st[i],map.get(st[i])+1);
    }else{
        map.set(st[i],1);
    }
}console.log(map);

for(let [key,values] of map){
    if(values > 1){
        console.log(key,", count = "+ values);
    }
}