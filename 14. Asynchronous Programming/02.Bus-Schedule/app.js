function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoSpan = document.getElementsByClassName('info')[0];

    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    let stopId = 'depot'

    function depart() {
        fetch(`${baseUrl}/${stopId}`)
            .then(res => res.json())
            .then(result => {
                const stopName = result.name;

                infoSpan.textContent = `Next stop ${stopName}`

            })
            departBtn.setAttribute('disabled', '');
            arriveBtn.removeAttribute('disabled')
    }

    async function arrive() {
        fetch(`${baseUrl}/${stopId}`)
            .then(res => res.json())
            .then(result => {
                const nextStopId = result.next;
                const stopName = result.name;

                infoSpan.textContent = `Arriving at ${stopName}`

                stopId = nextStopId;
            })
            arriveBtn.setAttribute('disabled', '');
            departBtn.removeAttribute('disabled')
    }

    return {
        depart,
        arrive
    };
}

let result = solve();