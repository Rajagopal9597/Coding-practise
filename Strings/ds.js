let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//
let k = parseInt(readLine());
let n = parseInt(readLine());
let arr = [];
let ans = -1;
for(let i=0;i<n;i++){
	arr[i] = parseInt(readLine());
}

for(let i=0;i<n;i++){
	if(k == arr[i]){
		ans = i;
	}
}console.log(ans);