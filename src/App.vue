<template>
  <Weather />
  <img class="logo" src="/src/assets/img/dnd-logo.png" alt="Logo dn'd" width="128">

  <p>Consultez le <strong>EXPLANATION.md</strong> pour voir l'explication de l'algorithme d'autocorrection.</p>

  <p><a href="https://faelivrin.fr/portfolio" target="_blank">Réalisé par Alex Salim</a></p>
</template>

<script>
import Weather from './components/Weather.vue';

export default {
  name: "App",
  components: {
    Weather,
  },
};
</script>
