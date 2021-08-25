<template>

  <!-- Input city -->
  <div id="form">
    <input type="text" v-model="city" placeholder="Nom de la ville" @keypress.enter="changeCity">

    <button @click="changeCity">Valider</button>
  </div>
  <!-- End Input City -->

  <transition name="fade" mode="out-in" appear>
      <!-- Display city temperature -->
      <div id="card">

        <!-- Global info -->
        <div id="weather">
          <div id="about">
            <img :src="'http://openweathermap.org/img/wn/'+ weather.icon +'@2x.png'" :alt="weather.overcast">
            
            <div>
              <h1>{{ weather.city }}</h1>
              <span class="temperature">{{ weather.currentTemp }}°</span>
              <span class="overcast">{{ weather.overcast }}</span>
            </div>
          </div>

          <div id="minmax">
            <div>MIN <strong>{{ weather.minTemp }}°</strong></div>
            <div>MAX <strong>{{ weather.maxTemp }}°</strong></div>
          </div>
        </div>
        <!-- End Global info -->

        <!-- Specifics info -->
        <div id="info">
          <span><img class="icon" src="/src/assets/img/sunrise.svg"> {{ weather.sunrise }}</span>
          <span><img class="icon" src="/src/assets/img/sunset.svg"> {{ weather.sunset }}</span>
          <span><img class="icon" src="/src/assets/img/humidity.svg"> {{ weather.humidity }}</span>
          <span><img class="icon" src="/src/assets/img/pressure.svg"> {{ weather.pressure }}</span>
          <span><img class="icon" src="/src/assets/img/wind.svg"> {{ weather.wind }}</span>
        </div>
        <!-- End Specifics info -->

      </div>
      <!-- End Display city temperature -->
  </transition>
</template>

<script>
import { useStore } from 'vuex';
import { onBeforeMount, ref } from 'vue';

export default {
  name: 'Weather',
  setup() {
    const store = useStore();

    // Variables
    const city = ref(store.state.modWeather.city);
    const weather = ref(store.state.modWeather);

    onBeforeMount(() => {
      store.dispatch('getWeather', city.value);
    });

    // Mettre à jour les informations d'une ville lors d'un input
    function changeCity() {
      store.dispatch('getWeather', city.value.toLowerCase().replace(/[&/\\#,+()$~%.'":*?<>{}]/g,'_'));
      city.value = "";
    }

    return {
      city,
      weather,
      changeCity
    }
  }
}
</script>