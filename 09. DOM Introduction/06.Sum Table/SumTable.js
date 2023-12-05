function sumTable() {
    const elements = document.getElementsByTagName('td');
    let total = 0;
    for (let index = 0; index < elements.length ; index++) {
        if (index % 2 !== 0) {
            const element = Number(elements[index].textContent);
            total += element
        } else {
            continue
        }
    }

    console.log(total)

    document.getElementById('sum').textContent = total
}