function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    const stopIdInput = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busesListElement = document.getElementById('buses');

    fetch(`${baseUrl}/${stopIdInput.value}`)
        .then(res => res.json())
        .then(result => {
            stopNameElement.textContent = result.name;
            const buses = result.buses;
            for (const [busId, time] of Object.entries(buses)) {
                listItem = document.createElement('li');
                listItem.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesListElement.appendChild(listItem)
            }
        })
        .catch(err => {
            stopNameElement.textContent = 'Error';
        })
}