let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// 

let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
let n = parseInt(readLine());
for(let i=0;i<n;i++){
    let strings = readLine().split(" ");
    let a = codeforeachstring(strings);
    console.log(compare(a));
}

function codeforeachstring(st){
    let codeofwrd = [];
    for(let i=0;i<st.length;i++){
        let word = st[i].split("");
         codeofwrd.push(wordscode(word));
    } return codeofwrd;
}

function wordscode(word){
    let cd = "";
    for(let i=0;i<word.length;i++){
        let asc = word[i].charCodeAt();
        cd += code[asc-97];
    }return cd
}

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