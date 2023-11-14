function modernTimes(string) {
    let array = string.split(' ');
    for (let i = 0; i<array.length; i++){
        word = array[i];
        if (word[0] == "#") {
            filtered_word = word.substr(1)
            if (/^[a-z]+$/i.test(filtered_word)) {
                console.log(filtered_word)
            }
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')