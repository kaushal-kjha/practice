function frequencyOfCharInString(str) {
    let obj = {};
    for (let char of str) {
        obj[char] ? obj[char] += 1 : obj[char] = 1
    }
    return obj;
    // str = str.split('');
    // const freq = str.reduce((names, name) => {
    //     names[name] = (names[name] || 0) + 1;
    //     return names;
    // }, {})
    // return freq;
}
const names = ["Aaran", "Aaren", "Aaran", "Aarman", "Aaron", "Aaron", "Aarron", "Aaryan"]
console.log(frequencyOfCharInString(names));