let len = 0;
let strLen = 0;
let arr = []
function countOccurance(str) {
    let obj = {};
    let subStr = "";
    strLen = strLen || str.length
    for (let i = 0; i < str.length; i++) {
        subStr += str[i];
        if (obj[str[i]]) {
            obj[str[i]] = obj[str[i]] + 1
        } else {
            obj[str[i]] = 1
        }
        if (obj["s"] == obj["e"]) {
            arr.push(subStr);
            len += subStr.length;
            if (len < strLen) {
                countOccurance(str.slice(i + 1,))
            }
            obj = {}
            break;
        }
    }
    return arr.length;
}
console.log(countOccurance("sesseeesseeesssees"));