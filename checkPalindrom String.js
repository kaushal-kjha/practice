function checkPalindromString(s) {
    let tempStr='';
    for (let i = s.length-1; i >=0 ; i--) {
        tempStr += s[i];
    }
    if (tempStr === s) return true;
    return false;
}
console.log(checkPalindromString('rotator'));