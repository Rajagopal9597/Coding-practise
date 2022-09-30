/*let a = "aabbccc";
a = a.split("");
console.log(a);
let count = 1;
let arr = [];
for(let i=1;i<a.length;i++){
    if(a[i] == a[i-1]){
      let d = count++;
      arr.push(a[i]+ '${d}');
    }
    count = 1;
}console.log(arr); 
let a = 'abacbc';
a.split("");
console.log(a);
let b = 'Abacbc';
let c = b.split("");
console.log(c);
console.log(a.localeCompare(b));*/


/*let str = 'ddbbaa';
let a = str.split("");
for(let i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
     if(a[i]>a[j]){
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;} 
    }
}console.log(a);*/

let arr = [9,7,5,4,5];
console.log(arr.sort());