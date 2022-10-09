//Input: s = "abcabcbb"
//Output: 3

let str = "abcabcbb";
let maxlen = 0;
let start = 0;
let map = new Map();
for(let i=0;i<str.length;i++){
    if(map.has(str[i])){
        start = Math.max(map.get(str[i]) + 1,start);
    }else{
        map.set(str[i],i);
        maxlen = Math.max(maxlen,i-start+1);
    }
}console.log(maxlen);