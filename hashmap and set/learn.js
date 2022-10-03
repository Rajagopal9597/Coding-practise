/*let set = new Set();
let arr = ['a','b','a','a','b'];
let count = 0;
for(let i=0;i<arr.length;i++){
    if(set.has(arr[i]) == false){
     set.add(count);}else{
        set.add(count++);
     }
}
console.log(set);
function findPair(arr, sum){
    let set = new Set();   //  { 3 5 1  }
    for(let i = 0; i<arr.length; i++){
        if(set.has(sum - arr[i])){      // 10 - 3
            console.log(arr[i], sum - arr[i]);
            break;
        }
        else
            set.add(arr[i]);
    }
}
 
findPair([3, 5, 1, 8, 7, 10, 2], 10); */
/*
function countThree(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            if (map.get(arr[i]) === 2) {
                return arr[i];
            }
            map.set(arr[i], map.get(arr[i]) + 1); // map.set(2 , map.get(2)==0 +1)
            console.log(map);
        }
        else {
            map.set(arr[i], 1);
        }
    }
}
 
console.log(countThree([2, 7, 1, -3, 8, 10, -3, -3, 1, 1])); */

/*let st = ["a","b","c"];
let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]; 
for(let i=0;i<st.length;i++){
 let num = st[i].charCodeAt();
 console.log(code[num-97]);
} */

let a = ['--...-.', '--...-.', '--...--.', '--...--.' ];
console.log(compare(a));
function compare(a){
    let map = new Map();
    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],map.get(a[i]) + 1)
        }else {
            map.set(a[i],1)
        }
    }return map.size
    
}