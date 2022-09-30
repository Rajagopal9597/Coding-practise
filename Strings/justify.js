/*let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}// */

 
function justifyText(words, maxWidth) {
    let answer = [];//O(no of words)
    let temp = [];//O(no of words)
    let charCount = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let remChars = maxWidth - (temp.length - 1) - charCount;//16-(0-1)-0=17
        //temp = [This, is]    word = an
        //remChars = 16 - 1 - 6 = 16 - 7 = 9
        if (word.length < remChars) {// <9 -> 8
            temp.push(word);
            charCount = charCount + word.length;
        } else {
            //pad white spaces to current temp and push it to answer
            answer.push(padWhiteSpaces(temp, charCount, maxWidth).join(''));
            temp = [];
            temp.push(word);
            charCount = word.length;
        }
    }
    //padding white spaces for last line and push to answer
    //beginning of last line logic
    let whiteSpaceCount = maxWidth - (temp.length - 1) - charCount;
    for(let i = 0; i<temp.length - 1; i++){
        temp[i] = temp[i] + '_';
    }
    while(whiteSpaceCount>0){
        temp[temp.length - 1] = temp[temp.length - 1] + '_';
        whiteSpaceCount--;
    }
    answer.push(temp.join(''));
    //end of last line logic
 
    return answer;
}


function padWhiteSpaces(temp, charCount, maxWidth) {
    let whiteSpaceCount = maxWidth - charCount;
    let i = 0;
    while (whiteSpaceCount > 0) {
        temp[i] = temp[i] + '_';
        whiteSpaceCount--;
        i = i + 1;
        if (i == temp.length - 1) {
            i = 0;
        }
    }
    return temp;
}
 
console.log(justifyText(["This", "is", "an", "example", "of", "text", "justification."], 16));
console.log(justifyText(["What", "must", "be", "acknowledgement", "shall", "be"], 16));
/**
 * ["This", "is", "an", "example", "of", "text", "justification."]
 * maxwidth = 16
 *
 * i   word         remChars word.length<remChars       temp          charCount   answer
 * 0   This             17              T             [This]            4
 * 1    is              12              T             [This, is]        6
 * 2    an              9               T             [This, is, an]    8
 * 3  example           6               F                                         [This____is____an]
 *                                                    [example]         7
 * 4    of              9               T             [example, of]     9
 * 5   text             6               T           [example, of, text] 13
 * 6 justification.     1               F                                         [This____is____an,
 *                                                                                  example__of_text]
 *                                                   [justification.]   14        [This____is____an,
 *                                                                                 example__of_text,
 *                                                                                 justification.__]
 *
 * */
/*
PadWhiteSpaces:
 * temp = [example, of, text] maxWidth = 16 charCount = 13
 *     whiteSpaceCount       i   (whiteSpaceCount > 0)     temp                         (i == temp.length - 1)
            3                0              T          [example_, of, text]
            2                1                                                                  F
                                            T          [example_, of_, text]
*/