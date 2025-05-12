document.getElementById('btn').addEventListener('click', () => {
    let searchDate = document.getElementById('date').value;
    let showModel = document.getElementById('showModel');

    if (!searchDate) {
        alert("Please select a date.");
        return;
    }

    fetch("https://api.rootnet.in/covid19-in/stats/history")
        .then((res) => res.json())
        .then((res) => {
            let singleRec = res.data.find((rec) => rec.day === searchDate);
            if (!singleRec) {
                alert('No data available for the selected date. Please select a valid date.');
                showModel.innerHTML = '';
                return;
            }

            showModel.innerHTML = '';
            singleRec.regional.forEach(rec => {
                let card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
                    <h3>${rec.loc}</h3>
                    <p><strong>Confirmed Cases:</strong> ${rec.totalConfirmed}</p>
                    <p><strong>Deaths:</strong> ${rec.deaths}</p>
                    <p><strong>Recovered:</strong> ${rec.discharged}</p>
                `;

                showModel.appendChild(card);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error fetching data. Please try again later.');
        });
});
