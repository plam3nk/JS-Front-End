window.addEventListener("load", solve);

function solve() {
    const fields = {
        expense: document.getElementById('expense'),
        amount: document.getElementById('amount'),
        date: document.getElementById('date')
    }

    const formElement = document.getElementsByClassName('expense-content')[0];

    const buttonElements = {
        addBtn: document.getElementById('add-btn'),
    }

    const currentInfo = {
        expense: null,
        amount: null,
        date: null,
    }

    function createElement(type, parent, textContent, classList, id, attributes, useInnerHtml) {
        const element = document.createElement(type);

        if (useInnerHtml && textContent) {
            element.innerHTML = textContent;
        } else {
            if (textContent && type !== 'input') {
                element.textContent = textContent
            }
        }

        if (textContent && type === 'input') {
            element.value = textContent;
        }

        if (classList && classList.length > 0) {
            element.classList.add(...classList);
        }

        if (id) {
            element.id = id;
        }

        if (attributes) {
            for (const key in attributes) {
                element[key] = attributes[key];
            }
        }

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }

    buttonElements.addBtn.addEventListener('click', loadData);

    function loadData() {
        if (Object.values(fields).some((x) => x.value === '')) {
            return;
        }
        const {expense, amount, date} = fields;

        const listItem = createElement('li', document.querySelector('#preview-list'), '', ['expense-item'])
        const articleItem = createElement('article', listItem)

        createElement('p', articleItem, `Type: ${expense.value}`);
        createElement('p', articleItem, `Amount: ${amount.value}$`);
        createElement('p', articleItem, `Date: ${date.value}`);

        const buttonsContainer = createElement('div', listItem, '', ['buttons']);

        const editBtn = createElement('button', buttonsContainer, 'edit', ['btn', 'edit']);
        const okBtn = createElement('button', buttonsContainer, 'ok', ['btn', 'ok']);

        editBtn.addEventListener('click', editInfo);
        okBtn.addEventListener('click', okInfo);

        for (const key in fields) {
            currentInfo[key] = fields[key].value;
        }

        buttonElements.addBtn.disabled = true;
        formElement.reset();
    }

    function editInfo() {
        for (const key in currentInfo) {
            fields[key].value = currentInfo[key];
        }

        document.getElementById('preview-list').innerHTML = '';
        buttonElements.addBtn.disabled = false;
    }

    function okInfo() {
        let infoList = document.querySelector('.expense-item');
        console.log(infoList)
        let cloneList = infoList.cloneNode(true);

        cloneList.querySelector('.buttons').remove()

        document.getElementById('expenses-list').appendChild(cloneList);
        document.getElementById('preview-list').innerHTML = '';
        buttonElements.addBtn.disabled = false;
    }

    document.querySelector('.delete').addEventListener('click', () => window.location.reload());
}