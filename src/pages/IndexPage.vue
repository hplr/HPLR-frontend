<template>
  <q-page class="row items-center justify-evenly">
    <GameCreator/>
  </q-page>
</template>

<script setup lang="ts">

import GameCreator from 'components/GameCreatorComponent.vue';

defineOptions({
  name: 'IndexPage'
});

</script>

<style scoped>
  q-page{
    padding:0;
    margin:0;
  }
</style>
