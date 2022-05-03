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

class Calculator {
    addition = (x, y) => {
         if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
            throw new Error('values are not integers');
        }
        if (x > 100 || y > 100) {
            throw new Error('Values must be less than 101');
        }
        return x + y;
    }
    subtraction = (x, y) => {
        if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
            throw new Error('values are not integers');
        }
        if (x > 100 || y > 100) {
            throw new Error('Values must be less than 101');
        }
        return x - y;
    }
    division = (x, y) => {
        
        if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
            throw new Error('values are not integers');
        }
        if (y === 0) {
            throw new Error('calculation not allowed');
        }
        return x / y;
    }
    multiplication = (x, y) => {
        
        if (Number.isInteger(x) === false || Number.isInteger(y) === false) {
            throw new Error('values are not integers');
        }
        if (x > 100 || y > 100) {
            throw new Error('Values must be less than 101');
        }
        return x * y;
    }
}

module.exports = { stringLength, reverseString, Calculator};