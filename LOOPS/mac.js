/*Macbook
You have been given n integer values. Lets say the given values are a1, a2, a3, a4 ...

Each of these values represents the remaining lifespan of different macbooks. (Negative values denotes that the particular macbook has already expired.)

You need to find the total lifespan of the macbooks which are still functional.

Input Format:
First line denotes n, the number of inputs. The next n lines contains one integer in each line.

Output Format:
One integer denoting the result, as mentioned above.

Example:
Input:

5
10
-20
30
40
50
Output:

130
Explanation:

From the given 5 integers, the result will be: 10+30+40+50 = 130 */
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine()); 
let sum = 0; 

while(n>0)
{
    let i = parseInt(readLine());
    if ( i > 0){
    sum += i;}
    n--;
}console.log(sum);