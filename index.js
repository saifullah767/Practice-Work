const stringLength= (stringarg) => {
    const lenth=stringarg.length;
    if (lenth<1 || lenth > 10){
        throw new Error(' String must be between 1 and 10');
    }
    
    return stringarg.length;
}
const reverseString= (stringarg) => {
    let datas=stringarg.split('');
    let reversed=datas.reverse().join('');
    return reversed;
}

module.exports = { stringLength, reverseString};