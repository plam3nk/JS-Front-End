function revealWords(wordParam, sentence) {
    let words = wordParam.split(", ")
    let strings = sentence.split(" ")

    for (let i = 0; i < strings.length; i++) {
        for (const word of words) {
            if (strings[i].includes('*') && strings[i].length === word.length) {
                strings[i] = word
            }
        }
    }

    console.log(strings.join(' '))
}

revealWords('great',
'softuni is ***** place for learning new programming languages'
)

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)