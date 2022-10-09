let strs = ["eat","tea","tan","ate","nat","bat"];
const map = new Map();
for(let i = 0; i < strs.length; i++) {
    const currentString = strs[i]; // eat
    // sort every single string alphabetically so we can use the value as a key to lookup the respective array in our hashmap
    const currentStringSorted = currentString.split('').sort().join('');// aet
    if(!map.has(currentStringSorted)) {
        map.set(currentStringSorted, []); //  (aet,[])
        
    }
    map.get(currentStringSorted).push(currentString);//aet => [eat,tea]
    
}
console.log(Array.from(map.values()));