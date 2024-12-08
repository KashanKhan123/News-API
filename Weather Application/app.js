const inputdata = document.getElementById('inputdataField');
const showWeater = document.getElementById('showweater');

const searchData = async () => {
    const API_KEY = 'cf6bed1741406b6ce9216cb20c39b0dc';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;
    
    try {
        const fetchData = await fetch(API_URL);
        const response = await fetchData.json();
        
        if (response.cod !== 200) {
            showWeater.innerHTML = `<p class="text-danger">Error: ${response.message}</p>`;
            return;
        }

        console.log(response);
        showData(response);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        showWeater.innerHTML = `<p class="text-danger">Failed to fetch data. Please try again later.</p>`;
    }
};

const showData = (data) => {
    showWeater.innerHTML = `
        <img width="150" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
        <h1 class="mt-3">${data.main.temp} °C</h1>
        <h2 class="mt-2">${data.weather[0].main}</h2>
        <p class="mt-2">${data.weather[0].description}</p>
    `;
};
