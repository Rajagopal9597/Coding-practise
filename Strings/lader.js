let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//

let n = parseInt(readLine());
for(let i = 0; i < n; i++){
    // Clear the output after each loop
    let output = '';
    for(let j = 0; j < n; j++){
      // Loop through, whenever (n-1-i) is bigger than j concat a space else #
       j < (n -1 -i) ? output += ' ': output += '#';
    }
    console.log(output);
}