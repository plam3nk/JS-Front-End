function censored_words(sentence, word) {
    const string = '*'.repeat(word.length)
    let result = sentence.replace(word, string)
    while (result.includes(word)) {
        result = result.replace(word, string)
    }

    console.log(result)
}

censored_words('A small sentence with some words', 'small')
censored_words('Find the hidden word', 'hidden')