function censorWord(sentence, wordToCensor){
    const regex = new RegExp(wordToCensor, 'gi');
    const censoredText = sentence.replace(regex, '***');
    return censoredText;
}

const originalPost = "JavaScript is fun, but sometiom JavaScript";
const cleanedPost = censorWord(originalPost, "JavaScript");
console.log(cleanedPost);