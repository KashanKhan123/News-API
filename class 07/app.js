    const inputdata = document.getElementById(`inputdataField`);
    const showWeater = document.getElementById(`showweater`);
    const searchData = async() => {
        const API_KEY = `cf6bed1741406b6ce9216cb20c39b0dc`;
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;
        const fetchData = await fetch(API_URL);
        const response = await fetchData.json();
        console.log(response);
        return showData(response)
    };

    const showData = (data) => {
        showWeater.innerHTML = 
        `     <img width="250"src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1 class="mt-5">${data.main.temp} hfff</h1>
            <h1 class="mt-5">${data.weather[0].main}</h1>`
    };
