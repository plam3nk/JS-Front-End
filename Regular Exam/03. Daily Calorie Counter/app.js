const baseURL = 'http://localhost:3030/jsonstore/tasks/'

const loadMealBtn = document.getElementById('load-meals');
const mealList = document.getElementById('list');
const formElement = document.querySelector('#form form');

const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');

const addMealBtn = document.getElementById('add-meal');
const editMealBtn = document.getElementById('edit-meal');

loadMealBtn.addEventListener('click', loadMeals)


addMealBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newMeal = {
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value,
    }

    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'applications/json'
        },
        body: JSON.stringify(newMeal)
    })
        .then(loadMeals)

    clearForm();

})

editMealBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const mealId = formElement.dataset.meal

    const meal = {
        _id: mealId,
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value,
    }

    fetch(`${baseURL}${mealId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(meal)
    })
        .then(loadMeals)
        .then(() => {
            editMealBtn.disalbed = true;
            addMealBtn.removeAttribute('disabled')

            clearForm();

            delete formElement.dataset.meal;
        })
})

function loadMeals() {
    return fetch(baseURL)
        .then(res => res.json())
        .then(result => {
            renderMeals(Object.values(result))
        })
}

function renderMeals(meals) {
    mealList.innerHTML = '';

    meals
        .map(renderMeal)
        .forEach(mealElement => mealList.appendChild(mealElement))
}

function renderMeal(meal) {
    const container = document.createElement('div')
    container.className = 'meal';

    const h2MealElement = document.createElement('h2');
    h2MealElement.textContent = meal.food;

    const h3TimeElement = document.createElement('h3');
    h3TimeElement.textContent = meal.time;

    const h3CaloriesElement = document.createElement('h3');
    h3CaloriesElement.textContent = meal.calories;

    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'meal-buttons';

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-meal';
    changeBtn.textContent = 'Change';

    changeBtn.addEventListener('click', (e) => {
        foodInput.value = meal.food;
        timeInput.value = meal.time;
        caloriesInput.value = meal.calories;

        container.remove();

        editMealBtn.removeAttribute('disabled');
        addMealBtn.disabled = true;

        formElement.dataset.meal = meal._id
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-meal';
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', (e) => {
        fetch(`${baseURL}${meal._id}`, {
            method: 'DELETE',
        })
            .then(loadMeals)
    })

    buttonContainer.appendChild(changeBtn);
    buttonContainer.appendChild(deleteBtn);

    container.appendChild(h2MealElement);
    container.appendChild(h3TimeElement);
    container.appendChild(h3CaloriesElement);
    container.appendChild(buttonContainer);

    return container;
}

function clearForm() {
    foodInput.value = ''
    timeInput.value = ''
    caloriesInput.value = ''
}