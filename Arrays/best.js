/*The first line contains an integer n, the number of games.

The second line contains n space-separated integers describing the respective values of score0, score1, score2, ... ,scoren-1.

Output Format
Print two space-seperated integers describing the respective numbers of times the best (highest) score increased and the worst (lowest) score decreased.

Sample Input
9
10 5 20 20 4 5 2 25 1
Sample Output
2 4 */
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

let n = parseInt(readLine());
let arr = readLine().split(" ");
for(let i in arr){
    arr[i] = Number(arr[i]);
}
let max = arr[0];
let maxcount = 0;
let mincount = 0;
let min = arr[0];
let newarr = [];
for(let i=0;i<n;i++){
    if(arr[i] > max){
        maxcount++;
        max = arr[i];
    }
    if(arr[i] < min){
        mincount++;
        min = arr[i];
    }
}
newarr.push(maxcount);
newarr.push(mincount);
console.log(newarr);