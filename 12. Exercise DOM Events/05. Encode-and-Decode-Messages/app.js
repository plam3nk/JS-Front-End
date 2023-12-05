function encodeAndDecodeMessages() {
    let textConvert = document.querySelectorAll('textarea')
    let [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    encodeBtn.addEventListener('click', encodeText);
    decodeBtn.addEventListener('click', decodeText);
    let newMessage = '';

    function encodeText() {
        newMessage = '';
        let text = textConvert[0].value
        for (const letter of text) {
            letterCode = Number(letter.charCodeAt()) + 1;
            newMessage += String.fromCharCode(letterCode);
            console.log(newMessage)
        }
        textConvert[0].value = '';
        textConvert[1].value = newMessage;
    }

    function decodeText() {
        newMessage = '';
        let text = textConvert[1].value
        for (const letter of text) {
            letterCode = Number(letter.charCodeAt()) - 1;
            newMessage += String.fromCharCode(letterCode);
            console.log(newMessage)
        }
        textConvert[1].value = newMessage;
    }

    newMessage = '';
}