/*Smallest window in a string containing all the characters of another string
Input:
S = "timetopractice"
P = "toc"
Output: 
toprac
Explanation: "toprac" is the smallest
substring in which "toc" can be found.
Example 2:

Input:
S = "zoomlazapzo"
P = "oza"
Output: 
apzo
Explanation: "apzo" is the smallest 
substring in which "oza" can be found. */

let s = "timetopractice";
let t = "toc";

if(t.length > s.length){
    return ""
}
let tMap = new Map();
for(let element of t){
    if(tMap.get(element)) tMap.set(element, tMap.get(element) + 1)
    else tMap.set(element, 1)
}
const tCount = [...tMap.keys()].length; // 3
let l=0, r=0, minStr = "";
let tempStr = s.substring(0,1);
let sMap = new Map();
for(let element of tempStr){
  if(sMap.get(element)) sMap.set(element, sMap.get(element) + 1)
  else sMap.set(element, 1)
}
while(r <= s.length){   // 0 <= 14
    let validationCount = 0;
    //Loop through all the values in t
    if(tCount <= [...sMap.keys()].length){
        for(let val of tMap.keys()){
            if(tMap.get(val) <= sMap.get(val)) validationCount++;
        }
    }
    if(tCount !== validationCount){
       r++; 
       //Update sMap
        if(sMap.get(s[r])) sMap.set(s[r], sMap.get(s[r]) + 1)
        else sMap.set(s[r], 1)
    }
    //Move left pointer
    else{
        if(minStr === ""){
            minStr = s.substring(l,r+1)
        }
     else  minStr.length > s.substring(l,r+1).length ? minStr = s.substring(l,r+1) : minStr = minStr;
       //Update sMap
       sMap.set(s[l], sMap.get(s[l]) - 1)
       l++;
       }
}
console.log(minStr);