/*Alternate sort
Given an array of integers, you have to perform alternate sort on the array. Alternate sort of an array is defined as rearranging the elements of the array such that the elements at even indices are sorted in decreasing order and the elements at odd indices are sorted in increasing order.

Note
Do not place an even index element at odd index or vice-versa
Do not use in built sort function at any stage of the solution
Input
First line contains a positive integer t, denoting the number of arrays
Next t lines contain space separated integers on each line, each line denotes one array
Output
t lines containing space separated integers, denoting the alternate sort of the input arrays

Example
Input:

2
8 -4 23 31 -19
25 37 0 -53 21 -7 89
Output:

23 -4 8 31 -19
89 -53 25 -7 21 37 0 */
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let n = parseInt(readLine());
for(let i=1;i<=n;i++){
    let arr = readLine().split(" ");
    converttoNumber(arr);
    let l = arr.length;
    let even = evenindex(arr);
    let odd = oddindex(arr);
    let  a = descendingeven(even);
    let b = ascendingodd(odd);
    let c = arranged(b,a,l);
    if(l%2 != 0){
        c.pop();
    }
    console.log(c);
}

function converttoNumber(arr){
    for(let i in arr){
        arr[i] = Number(arr[i]);
    } return arr;
}

function evenindex(arr){
    let evenindex = [];
    for(let i=0;i<arr.length;i=i+2){
       evenindex.push(arr[i]);
    } return evenindex;
}
    function oddindex(arr){
        let oddindex = [];
        for(let j=1;j<arr.length;j=j+2){
            oddindex.push(arr[j])
    } return oddindex;
    
       
    }

    function descendingeven(even){
        for(let i=0;i<even.length;i++){
            for(let j=i+1;j<even.length;j++){
                if(even[j] > even[i]){
                    temp = even[i];
                    even[i] = even[j];
                    even[j] = temp;
                }
            }
        } return even
    }

        function ascendingodd(odd){
            for(let i=0;i<odd.length;i++){
                for(let j=i+1;j<odd.length;j++){
                    if(odd[j] < odd[i]){
                        temp = odd[i];
                        odd[i] = odd[j];
                        odd[j] = temp;
                    }
                }
        } return odd
    }

    function arranged(b,a,l){
        
        let arrnew = [];
        {
        for(let i=0;i < a.length;i++){
           arrnew.push(a[i]);
           arrnew.push(b[i]);
        }
    }
        return arrnew;
    }