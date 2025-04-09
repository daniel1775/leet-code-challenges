const calculateAlphabeticOrder = (alphabetic, words) => {
    const indexMap = {};

    // O(n)
    for (let i = 0; i < alphabetic.length; i++) {
        indexMap[alphabetic[i]] = i;
    }

    // O(n)²
    let limitWords = 0;
    let alphaIndex = 0;
    let acum = -1;
    let isWordsEnd = false
    let isOrdered = true;

    while (!isWordsEnd) {

        for (let i = 0; i < words.length; i++) {
            if (words[i].length <= alphaIndex) {
                limitWords++;
                continue;
            } 
            console.log('words[i].charAt(alphaIndex): ', words[i].charAt(alphaIndex));
            console.log('monda: ', indexMap[words[i].charAt(alphaIndex)]);
            console.log('acum: ', acum);
            console.log('--------------------------------------');
            
            if (indexMap[words[i].charAt(alphaIndex)] < acum) {
                isOrdered = false;
                isWordsEnd = true;
                break;
            }
            acum = indexMap[words[i].charAt(alphaIndex)];
        }

        if (limitWords === words.length || alphabetic.length <= alphaIndex) {
            isWordsEnd = true;
        }

        acum = -1;
        alphaIndex++;
    }

    return isOrdered;
} 

const alphabetic1 = 'hlabcdefgijkmnopqrstuvwxyz';
const words1 = ['habito', 'hacer', 'lectura', 'sonreir'];

const alphabetic2 = 'hlabcdefgijkmnopqrstuvwxyz';
const words2 = ['habito', 'hacer', 'lectura', 'sonreir'];

console.log(calculateAlphabeticOrder(alphabetic1, words1));