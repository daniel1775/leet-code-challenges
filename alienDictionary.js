const calculateAlphabeticOrder = (alphabetic, words) => {
    if (words.length <= 1) return true;

    let i = 0, j = 1, wordIndex = 0; 
    const indexMap = {
        null: -1
    };

    // O(n)
    for (let i = 0; i < alphabetic.length; i++) {
        indexMap[alphabetic[i]] = i;
    }

    // O(n²)
    do {
        if (j >= words.length) {
            return true
        }

        if (indexMap[(words[i].charAt(wordIndex) || 'null')] > indexMap[(words[j].charAt(wordIndex) || 'null')]) {
            return false;
        } else if (indexMap[(words[i].charAt(wordIndex) || 'null')] === indexMap[(words[j].charAt(wordIndex) || 'null')]) {
            while (true) {
                wordIndex++;
                if (indexMap[(words[i].charAt(wordIndex) || 'null')] < 0 && indexMap[(words[j].charAt(wordIndex) || 'null')] < 0) {
                    break;
                } else if (indexMap[(words[i].charAt(wordIndex) || 'null')] < indexMap[(words[j].charAt(wordIndex) || 'null')]) {
                    break;
                } else if (indexMap[(words[i].charAt(wordIndex) || 'null')] > indexMap[(words[j].charAt(wordIndex) || 'null')]) {
                    return false;
                } 
            }
        }
        i++, j++, wordIndex = 0;
    } while (true);
} 

// true
const alphabetic1 = 'hlabcdefgijkmnopqrstuvwxyz';
const words1 = ['habito', 'hacer', 'lectura', 'sonreir'];

// true
const alphabetic2 = 'hlabcdefgijkmnopqrstuvwxyz';
const words2 = ["hello", "leetcode"];

// false
const alphabetic3 = 'worldabcefghijkmnpqstuvxyz';
const words3 = ["word", "world", "row"];

// false
const alphabetic4 = 'abcdefghijklmnopqrstuvwxyz';
const words4 = ["apple", "app"];

// true
const alphabetic5 = 'abcdefghijklmnopqrstuvwxyz';
const words5 = ["app", "apple"];

// true
const alphabetic6 = "zyxwvutsrqponmlkjihgfedcba";
const words6 = ["cba", "cab", "abc"];

// false
const alphabetic7 = 'abcdefghijklmnopqrstuvwxyz';
const words7 = ["conocer", "cono"];

// false
const alphabetic8 = "hlabcdfgijkmnopqrstuvwxyz";
const words8 = ["habito", "hacer", "sonreir", "lectura"];

console.log(calculateAlphabeticOrder(alphabetic8, words8));