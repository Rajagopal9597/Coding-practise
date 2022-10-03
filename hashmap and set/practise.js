let st = "abcsffds";
let maxlen = 0;
let start = 0;
let map = new Map();
for(let i=0;i<st.length;i++){
   if(map.has(st[i])){
    start = map.get(st[i])+1;
   }else{
    map.set(st[i],i);
   }
   maxlen = Math.max(map.get(st[i])-start + 1,maxlen);
}
console.log(maxlen);