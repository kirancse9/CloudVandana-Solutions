function reverseWordsInSentence(sentence) {
    const words = sentence.split(/\s+/);

    const reversedWords = words.map(reverseString);

    return reversedWords.join(' '); 
}

function reverseString(str) {
    return str.split('').reverse().join(''); 
}


const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log("Original sentence: " + inputSentence);
console.log("Reversed sentence: " + reversedSentence);