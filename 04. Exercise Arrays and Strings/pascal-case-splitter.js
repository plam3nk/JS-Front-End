function pascal_case_splitter(string) {
    let words = '';
    let iteration = 0

    for (const char of string) {
        iteration += 1

        if (char === char.toUpperCase() && iteration > 1) {
            words += ' ' + char
        } else {
            words += char
        }
    }

    words = words.split(' ')
    console.log(words.join(', '))
}

pascal_case_splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')