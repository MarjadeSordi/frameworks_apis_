function getUserPosition() {
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=fb419abb9c936c92e600268e0295e81c`;
      fetchApi(url);
    });
  }

function fetchApi(url) {
    let city = document.querySelector('.city');
    let temp = document.querySelector('.temp');
    let temp_max = document.querySelector('.temp_max');

    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
      let tempMaxinCelsius = ((5/9) * (data.main.temp_max-32)).toFixed(1);
      city.innerText = `Hoje a temperatura em ${data.name} é:` 
      temp.innerText = `${tempInCelsius}°`;
      temp_max.innerText =`Hoje a máxima vai ser de ${tempMaxinCelsius}°`
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temp.innerText = `-`;
    })
  }
  
  getUserPosition();