window.addEventListener("load", solve);

function solve() {
    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');

    const addBtn = document.getElementById('add-btn')
    const expenseInput = document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const dateInput = document.getElementById('date');
    const deleteBtn = document.getElementsByClassName('delete')[0];

    addBtn.addEventListener('click', addPreview)

    function addPreview(event) {
        let isEmpty = expenseInput.value === '' || amountInput.value === '' || dateInput.value === '';

        if (!isEmpty) {
            event.preventDefault();

            const listItem = document.createElement('li');
            listItem.classList.add('expense-item');

            const articleItem = document.createElement('article');

            const expenseP = document.createElement('p');
            expenseP.textContent = `Type: ${expenseInput.value}`;

            const amountP = document.createElement('p');
            amountP.textContent = `Amount: ${amountInput.value}$`;

            const dateP = document.createElement('p');
            dateP.textContent = `Date: ${dateInput.value}`;

            articleItem.appendChild(expenseP);
            articleItem.appendChild(amountP);
            articleItem.appendChild(dateP);

            const buttonsDiv = document.createElement('div');
            buttonsDiv.className = 'buttons';

            const editBtn = document.createElement('button');
            editBtn.textContent = 'edit';
            editBtn.classList.add('btn')
            editBtn.classList.add('edit')

            const okBtn = document.createElement('button');
            okBtn.textContent = 'ok';
            okBtn.classList.add('btn');
            okBtn.classList.add('ok');

            buttonsDiv.appendChild(editBtn);
            buttonsDiv.appendChild(okBtn);

            listItem.appendChild(articleItem);
            listItem.appendChild(buttonsDiv);

            previewList.appendChild(listItem);

            clearForm();

            addBtn.disabled = true;

            editBtn.addEventListener('click', (e) => {
                const paragraphElements = previewList.querySelectorAll('article p');
                const [expenseName, amount, date] = Array.from(paragraphElements);

                expenseInput.value = expenseName.textContent.split(': ')[1];
                amountInput.value = amount.textContent.split(': ')[1].slice(0, -1);
                dateInput.value = date.textContent.split(': ')[1];

                previewList.innerHTML = '';
                addBtn.removeAttribute('disabled');
            })

            okBtn.addEventListener('click', (e) => {
                const buttons = document.getElementsByClassName('.buttons').remove();

                expensesList.appendChild(listItem)

                previewList.innerHTML = '';

                addBtn.removeAttribute('disabled')

                deleteBtn.addEventListener('click', () => {
                    location.reload()
                })
            })
        }
    }

    function clearForm() {
        expenseInput.value = '';
        amountInput.value = '';
        dateInput.value = '';
    }
}