function extractText() {
    const elemenets = document.getElementsByTagName('li');
    const result = [];

    for (const item of Array.from(elemenets)) {
        result.push(item.textContent)
    }

    const textAreaElement = document.getElementById('result')
    textAreaElement.textContent = result.join('\n')
}