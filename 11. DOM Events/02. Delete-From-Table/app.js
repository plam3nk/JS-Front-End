function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    
    const tableRows = Array.from(document.querySelectorAll('tbody tr'));
    let isRemoved = false;
    let resultElement = document.querySelector('#result');

    for (const row of tableRows) {
        const emailCell = row.children[1]
        if (emailCell.textContent === inputElement.value) {
            row.remove();
            isRemoved = true;
        }
    }

    if (isRemoved) {
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.'
    }
}