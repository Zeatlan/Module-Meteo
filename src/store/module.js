import axios from 'axios';

export default {
  state: () => ({
    city: 'Lille',
    currentTemp: '',
    minTemp: '',
    maxTemp:'',
    sunrise: '',
    sunset: '',
    pressure: '',
    humidity: '',
    wind: '',
    overcast: '',
    icon: ''
  }),

  mutations: {
    GET_WEATHER(state, city) {

      axios
      .get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&lang=fr&appid=31f429cfb0ddd0f0183cefa48e683751')
      .then(response => {
        state.icon = response.data.weather[0].icon;

        state.city = response.data.name;
        state.currentTemp = parseInt(response.data.main.temp);
        state.overcast = response.data.weather[0].description;

        state.minTemp = parseInt(response.data.main.temp_min);
        state.maxTemp = parseInt(response.data.main.temp_max);

        state.sunrise = new Date(response.data.sys.sunrise*1000).toLocaleTimeString("fr-FR").slice(0,5);
        state.sunset = new Date(response.data.sys.sunset*1000).toLocaleTimeString("fr-FR").slice(0,5);
        state.humidity = response.data.main.humidity + '%';
        state.pressure = response.data.main.pressure;
        state.wind = response.data.wind.speed + 'm/s';
      })
      .catch(error => {
        console.log(error)
      });
    }
  },

  actions: {
    getWeather({commit}, city = 'Dunkerque') {
      // Verification pour éviter les charactères spéciaux
      if (city.search(/[^a-zA-Z_ -]+/) === -1) 
        commit('GET_WEATHER', city);
      else
        alert('Merci de ne préciser que des lettres.'); 
    }
  },

  getters: {
    temperature(state) {
      return state.currentTemp;
    }
  }
}