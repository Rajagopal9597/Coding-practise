/* input:["flower","flow","flight"] ;
output: "fl"; */
let strs = ["flower","flow","floght"];
strs.sort();
console.log(strs);
let prefix = "";
for( let i = 0; i < strs[0].length; i++ ) {
    if( strs[0][i] === strs[strs.length - 1][i] ) {  // f
      prefix = strs[0].substring(0, i + 1);
  } else {
      break;
  }
}console.log(prefix);