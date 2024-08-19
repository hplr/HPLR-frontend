<script setup lang="ts">

// import GameSideAggregateComponent from 'components/GameSideAggregateComponent.vue';
import { ref } from 'vue';
import GameDataComponent from 'components/GameDataComponent.vue';
import { GameData } from 'components/models';

withDefaults(defineProps<Props>(), {
 title: () => 'a'
});


const alert=ref(false)
const confirm = ref(false)
let savedData=ref(false)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const gameData = ref<GameData>()

interface Props {
  title: string;
}
function saveData(){
  savedData.value = true;
}
</script>

<template>

  <q-card class="landing-page-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">Our Changing Planet</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-checkbox :model-value="savedData" :disable="false"></q-checkbox>
      <q-btn label="Define game data" color="primary" @click="alert = true" />
    </q-card-actions>
  </q-card>
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Define game data" color="primary" @click="alert = true" />
      <q-btn label="Confirm" color="primary" @click="confirm = true" />

      <q-dialog v-model="alert" class="dialog-game-data">
        <q-card class="dialog-game-data">
          <q-card-section>
            <div class="text-h6">Define game data</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="game-data-wrapper">
              <GameDataComponent :game-data="undefined"/>
            </div>

          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Save game data" color="primary" @click="saveData" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

    </div>
  </template>

<style scoped>

.game-data-wrapper {
  width:95%;
}
.dialog-game-data{
  width:50vw;
  max-width: none !important;
}
</style>
