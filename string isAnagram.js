function isAnagram(s1, s2) {
    s1 = s1.toLowerCase().split('').sort().join('');
    s2 = s2.toLowerCase().split('').sort().join('');
    console.log(s1,s2);
    if (s1 === s2) return true;
    return false;
}
console.log(isAnagram('phqtrnilf','ilthnqrpf'));