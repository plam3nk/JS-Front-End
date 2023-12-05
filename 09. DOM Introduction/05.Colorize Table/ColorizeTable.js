function colorize() {
    const rows = document.getElementsByTagName('tr');

    for (let index = 0; index < rows.length; index++) {
        if (index % 2 !== 0) {
            rows[index].style.background = 'teal'
        }
    }
}