let str = 'kaushal kishor';
const vowels = ['a', 'e', 'i', 'o', 'u'];
str = str.split('');

const filtered = str
    .filter(key => vowels.includes(key))
    .reduce((obj, key) => {
        obj[key] ? obj[key] += 1 : obj[key] = 1;
        return obj;
    }, {});

console.log(filtered);