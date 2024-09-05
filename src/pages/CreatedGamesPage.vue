<script setup lang="ts">

import GameList from 'components/GameList.vue';
</script>

<template>
  <q-page class="column items-center justify-evenly hplr-page created-games-page">
      <GameList :type="'created'"/>
  </q-page>
</template>

<style scoped>
  .created-games-page{
    background-image: url("src/assets/bg-image-2.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
