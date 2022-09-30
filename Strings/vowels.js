let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//
let n = parseInt(readLine());
let vowels = ['a','e','i','o','u'];
let input = readLine();
let ans = "YES"
for(let i=0;i<vowels.length;i++){
    let vowel = vowels[i];
    let str = check(vowel,input);
    if(str == 0){
        ans = "NO";
        break;
    }
    
}console.log(ans);

function check(vowel,input){
    let count = 0;
    for(let i=0;i<input.length;i++){
        let text = input.charAt(i);
        if(vowel == text){
           count++
        }
    }return count
}