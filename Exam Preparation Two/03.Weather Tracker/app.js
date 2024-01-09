const baseURL = 'http://localhost:3030/jsonstore/tasks/';

const loadHistoryBtn = document.getElementById('load-history');
const historyList = document.getElementById('list');
const formElement = document.querySelector('#form form');
const locationInput = document.getElementById('location');
const temperatureInput = document.getElementById('temperature');
const dateInput = document.getElementById('date');
const addWeatherBtn = document.getElementById('add-weather');
const editWeatherBtn = document.getElementById('edit-weather')

loadHistoryBtn.addEventListener('click', loadHistories);

addWeatherBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newWeather = {
        location: locationInput.value,
        date: dateInput.value,
        temperature: temperatureInput.value,
    }

    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(newWeather)
    })
        .then(loadHistories)

    clearForm();
})

editWeatherBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const weatherId = formElement.dataset.history;

    const weather = {
        _id: weatherId,
        location: locationInput.value,
        date: dateInput.value,
        temperature: temperatureInput.value
    }

    fetch(`${baseURL}${weatherId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(weather)
    })
        .then(loadHistories)
        .then(() => {
            editWeatherBtn.disabled = true;
            addWeatherBtn.removeAttribute('disabled');

            clearForm();

            delete formElement.dataset.history
        })
})

function clearForm() {
    locationInput.value = '';
    dateInput.value = '';
    temperatureInput.value = '';
}

function loadHistories() {
    return fetch(baseURL)
        .then(res => res.json())
        .then(result => {
            renderHistories(Object.values(result))
        })
}

function renderHistories(histories) {
    historyList.innerHTML = '';

    histories
        .map(renderHistory)
        .forEach(historyElement => historyList.appendChild(historyElement))
}

function renderHistory(history) {
    const container = document.createElement('div');
    container.className = 'container';

    const h2LocationElement = document.createElement('h2');
    h2LocationElement.textContent = history.location;

    const h3DateElement = document.createElement('h3');
    h3DateElement.textContent = history.date;

    const h3TemperatureElement = document.createElement('h3');
    h3TemperatureElement.textContent = history.temperature;
    h3TemperatureElement.id = 'celsius'

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'buttons-container';

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';

    changeBtn.addEventListener('click', (e) => {
        locationInput.value = history.location;
        temperatureInput.value = history.temperature;
        dateInput.value = history.date;

        container.remove();

        editWeatherBtn.removeAttribute('disabled');
        addWeatherBtn.disabled = true;

        formElement.dataset.history = history._id
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', (e) => {
        fetch(`${baseURL}${history._id}`, {
            method: 'DELETE',
        })
            .then(loadHistories);
    })

    buttonContainer.appendChild(changeBtn);
    buttonContainer.appendChild(deleteBtn)

    container.appendChild(h2LocationElement);
    container.appendChild(h3DateElement);
    container.appendChild(h3TemperatureElement);
    container.appendChild(buttonContainer);
    return container;
}