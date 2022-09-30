let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}//

let name = readLine();
let marks = parseInt(readLine());
let arr = [];
for(let i=0;i<marks;i++){
    arr[i] = parseInt(readLine());
}

let n = parseInt(readLine());
for(let i=0;i<n;i++){
    let str = readLine()
    if (str == "get_marks"){
    let test = parseInt(readLine())
    let cls = new Student(name,arr,test);
    console.log(cls.get_marks());}
}

class Student{
    constructor(name,arr,test){
        this.studentname = name;
        this.arr = arr;
        this.test = test;
    }
    get_marks(){
      return this.arr[this.test];
}
}