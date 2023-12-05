function addItem() {
    let selectMenu = document.getElementById('menu');
    let option = document.createElement('option');

    let itemValue = document.getElementById('newItemValue');
    let itemText = document.getElementById('newItemText');

    option.value = itemValue.value
    option.textContent = itemText.value

    selectMenu.appendChild(option)

    itemValue.value = '';
    itemText.value = '';
}