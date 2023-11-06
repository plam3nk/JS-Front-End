function count_string_occurences(sentence, string) {
    let words = sentence.split(' ');
    let counter = 0;

    for (let word of words) {
        if (word == string) {
            counter += 1
        }
    }

    console.log(counter)
}

count_string_occurences('This is a word and it also is a sentence',
    'is'
)

count_string_occurences('softuni is great place for learning new programming languages',
    'softuni'
)