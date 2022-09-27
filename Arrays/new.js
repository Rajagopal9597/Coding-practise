let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


// ## This function should return single integer. The integer should be maximum value of input list
// ## Please fill the following function

/*function maximumValue(inputNumbers){
    // write below this here
	let max = inputNumbers[0];
	for(let i=1;i<inputNumbers.length;i++){
		if(max < inputNumbers[i]){
			max = inputNumbers[i];
		}
    }return max;
}

// ## This function should return single integer. 
// ## The integer should be minimum value of input list
function minimumValue(inputNumbers){
    // Please write below this
	let min = inputNumbers[0];
	for(let i=1;i<inputNumbers.length;i++){
		if(min > inputNumbers[i]){
			min = inputNumbers[i];
		}
	}return min;
    
}


// ## This function should return list of integer which lies between m1 and m2. 
// ## if m1 <= m2 return list of numbers between m1 and m2 */
let n = parseInt(readLine());
let arr = readLine().split(" ");
ConvertToNumber(arr);
function ConvertToNumber(arr){
    for(let each in arr){
        arr[each]=Number(arr[each]);
    }
    } // arr[4,7,6,10,1] 
 
let l = arr.length; //5
let sum = 0;
let max = arr[arr.length-1]; // arr[4] = 1
for (let i = arr.length - 1; i >= 0; i--){ // 4 3 2 1
    let j = arr.length - i - 1;  // 5-4-1
    let newMax = Math.max(max, arr[i]);
   
    sum += newMax - arr[j];   
    // -3 3 4 0 9
    max = newMax
}
console.log(sum);
