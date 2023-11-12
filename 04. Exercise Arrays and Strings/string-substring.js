function stringSubstring(word, sentence) {
    if (sentence.toLowerCase().includes(word.toLowerCase())) {
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language'
)

stringSubstring('python',
    'JavaScript is the best programming language'
)