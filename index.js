const stringLength = (stringarg) => {
    const leng = stringarg.Length;
    if (leng<1 || leng>10) {
        throw new Error("string must greater than 1 and less than 10"); 
    }

    return stringarg.Length;
}

module.exports = { stringLength};