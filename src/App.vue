<template>
  <Weather />
  <img class="logo" src="@/assets/img/dnd-logo.png" alt="Logo dn'd" width="128">

  <p>Consultez le <a href="https://github.com/Zeatlan/module-meteo/blob/main/EXPLANATION.md" target="_blank">EXPLANATION.md</a> pour voir l'explication de l'algorithme d'autocorrection.</p>

  <p><a href="https://faelivrin.fr/portfolio" class="copyright" target="_blank">Réalisé par Alex Salim</a></p>
</template>

<script setup>
import { defineComponent } from '@vue/runtime-core';
import Weather from './components/Weather.vue';

defineComponent({
  Weather
});
</script>
