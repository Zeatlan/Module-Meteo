import { createStore } from 'vuex';
import moduleWeather from './module';

export default createStore({
  modules: {
    modWeather: moduleWeather
  }
})
