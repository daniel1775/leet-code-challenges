function romanToInt(s) {
    if (!s) return 0;

    const regex = /(IV|IX|XL|XC|CD|CM)/g; 
    let result = 0;

    const specialCases = s.match(regex);
    const normalCases = s.replace(regex, '').split('');

    console.log(specialCases);
    

    specialCases?.forEach((digit) => {
        if (digit === 'IV') {
            result += 4;
        }
        if (digit === 'IX') {
            result += 9;
        }
        if (digit === 'XL') {
            result += 40;
        }
        if (digit === 'XC') {
            result += 90;
        }
        if (digit === 'CD') {
            result += 400;
        }
        if (digit === 'CM') {
            result += 900;
        }
    })

    normalCases?.forEach((digit) => {
        if (digit === 'I') {
            result += 1;
        }
        if (digit === 'V') {
            result += 5;
        }
        if (digit === 'X') {
            result += 10;
        }
        if (digit === 'L') {
            result += 50;
        }
        if (digit === 'C') {
            result += 100;
        }
        if (digit === 'D') {
            result += 500;
        }
        if (digit === 'M') {
            result += 1000;
        }
    })

    return result;
};

console.log(romanToInt("MCMXCIV"));