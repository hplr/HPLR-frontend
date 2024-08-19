<template>
  <q-page class="row items-center justify-evenly">
<!--    <GameCreator/>-->
    <q-card class="landing-page-card">
      <q-card-section class="bg-primary text-white" @click="$router.push('game')">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">

// import GameCreator from 'components/GameCreatorComponent.vue';

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
