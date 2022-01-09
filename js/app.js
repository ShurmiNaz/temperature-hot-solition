const API_KEY = `9342d57a23f7be7283f719b80dd1a286`;
const searchTemperature = () => {
     const city = document.getElementById('input-city-field').value;
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
     fetch(url)
          .then(res => res.json())
          .then(data => displayTemperature(data))
};

const setInnerText = (id, text) => {
     document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
     setInnerText('city-name', temperature.name);
     setInnerText('temp', temperature.main.temp);
     setInnerText('country', temperature.sys.country);
     setInnerText('weather-situation', temperature.weather[0].main);
     // set weather icon
     const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
     const imgIcon = document.getElementById('weather-icon');
     imgIcon.setAttribute('src', url);

}
