const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadVacationBtn = document.getElementById('load-vacations');
const vacationList = document.getElementById('list');
const formElement = document.querySelector('#form form');
const nameInput = document.getElementById('name');
const numDaysInput = document.getElementById('num-days');
const formDateInput = document.getElementById('from-date');
const formAddBtn = document.getElementById('add-vacation');
const formEditBtn = document.getElementById('edit-vacation');

loadVacationBtn.addEventListener('click', loadVacations)

formAddBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Get data from inputs
    const newVacation = {
        name: nameInput.value,
        days: numDaysInput.value,
        date: formDateInput.value,
    }

    // Send post request to server
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(newVacation)
    })
        .then(loadVacations)

    clearForm();
    // GET vaccations

    // Clear inputs
})

formEditBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const vacationId = formElement.dataset.vacation;
    // Get data
    const vacation = {
        _id: vacationId,
        name: nameInput.value,
        days: numDaysInput.value,
        date: formDateInput.value,
    }
    // Put request
    fetch(`${baseUrl}${vacationId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vacation)
    })
        .then(loadVacations)
        .then(() => {
            formEditBtn.disabled = true;
            formAddBtn.removeAttribute('disabled')

            clearForm();

            delete formElement.dataset.vacation;
        })
});

function clearForm() {
    nameInput.value = ''
    numDaysInput.value = ''
    formDateInput.value = ''
}

function loadVacations() {
    return fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
            renderVacations(Object.values(result))
        })
}

function renderVacations(vacations) {
    vacationList.innerHTML = '';

    vacations
        .map(renderVacation)
        .forEach(vacationElement => vacationList.appendChild(vacationElement))
}

function renderVacation(vacation) {
    const container = document.createElement('div');
    container.className = 'container';

    const h2Element = document.createElement('h2');
    h2Element.textContent = vacation.name;
    const h3DateElement = document.createElement('h3');
    h3DateElement.textContent = vacation.date;
    const h3DaysElement = document.createElement('h3');
    h3DaysElement.textContent = vacation.days;

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change'

    changeBtn.addEventListener('click', (e) => {

        // Add to form fields.

        nameInput.value = vacation.name;
        numDaysInput.value = vacation.days;
        formDateInput.value = vacation.date;

        // Remove from confirmed list.
        container.remove();
        // Activate edit vacation button.
        formEditBtn.removeAttribute('disabled');
        // Deactivate add vacation button.
        formAddBtn.disabled = true;

        // Save vacation ID
        formElement.dataset.vacation = vacation._id

    })

    const doneBtn = document.createElement('button');
    doneBtn.classList = 'done-btn';
    doneBtn.textContent = 'Done'

    doneBtn.addEventListener('click', () => {
        // Send delete request
        fetch(`${baseUrl}${vacation._id}`, {
            method: 'DELETE',
        })
            .then(loadVacations);
        // Load vacations
    })

    container.appendChild(h2Element)
    container.appendChild(h3DateElement)
    container.appendChild(h3DaysElement)
    container.appendChild(changeBtn)
    container.appendChild(doneBtn)

    return container;
}