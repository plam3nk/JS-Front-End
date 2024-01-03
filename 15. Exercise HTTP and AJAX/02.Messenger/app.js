function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const [nameInput, contentInput, sendBtn, refreshBtn] = document.getElementsByTagName('input');

    const messageTextArea = document.getElementById('messages');

    sendBtn.addEventListener('click', async () => {
        const messageFormat = {
            author: nameInput.value,
            content: contentInput.value
        };

        let isValidMessage = nameInput.value !== '' && contentInput.value !== '';

        if (isValidMessage) {
            await fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(messageFormat)
            });

            nameInput.value = '';
            contentInput.value = '';
        }
    })

    refreshBtn.addEventListener('click', async () => {

        const response = await fetch(baseUrl)
        const allMessages = await response.json()
        const messagesToDisplay = [];

        for (message of Object.values(allMessages)) {
            messagesToDisplay.push(`${message.author}: ${message.content}`)
        }

        messageTextArea.textContent = messagesToDisplay.join('\n');
    })
}

attachEvents();