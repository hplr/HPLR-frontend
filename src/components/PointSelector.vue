<script setup lang="ts">

import { Ref, ref } from 'vue';
import { GameSnapshot, SaveScoreForGameSideDto } from 'components/models';
import { useQuasar } from 'quasar';

const props = defineProps<{
  selectedGame: GameSnapshot | undefined;
}>();

const details: Ref<SaveScoreForGameSideDto> = ref(
  {
    gameId: '',
    gameSideId: '',
    turnNumber: 0,
    score: 0,
    table: false
  }
);
const selectedSide: Ref<number> = ref(0);
const $q = useQuasar();

async function savePoints(): Promise<unknown> {
  console.log(details);
  if (props.selectedGame === undefined) {
    throw new Error('Game is not defined!');

  }
  details.value.gameId = props.selectedGame.gameId.gameId;
  if (0 === selectedSide.value) {
    details.value.gameSideId = props.selectedGame.firstGameSide.sideId.sideId;
  } else {
    if (props.selectedGame.secondGameSide === null) {
      throw new Error('Second side is not defined!');
    }
    details.value.gameSideId = props.selectedGame.secondGameSide.sideId.sideId;
  }
  try {
    const response = await fetch('http://localhost:8083/game/saveScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details.value)
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {

      $q.notify({
        message: response.status.toString(),
        icon: 'report_problem',
        color: 'negative'
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }


    // Parse the response body as JSON
    return await response.json();

  } catch (error: unknown) {
    console.error('Error saving the game:', error);

    throw error; // Re-throw the error to be handled by the caller
  }
}

</script>

<template>
  <div class="point-selector-wrapper">
    <h4>Turn results</h4>
    <h6>Active side</h6>
    <q-radio v-model=selectedSide val="0">First side</q-radio>
    <q-radio v-model=selectedSide val="1">Second side</q-radio>
    <h6>Turn number</h6>
    <q-input class ="game-data-input-field" v-model="details.turnNumber"></q-input>
    <h6>Score earned this turn</h6>
    <q-input class ="game-data-input-field" v-model="details.score"></q-input>
    <h6>Was this side tabled this turn?</h6>
    <q-checkbox v-model="details.table"></q-checkbox>
    <q-btn class="point-selector-btn" @click=savePoints()>Save turn</q-btn>
    <q-btn class="point-selector-btn">Finish game</q-btn>
  </div>
</template>

<style scoped>
  .point-selector-wrapper{
    display: flex;
    width:20vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2vw;
    background: rgba(255, 255, 255, 0.8) !important;
  }

  .point-selector-wrapper h6{
    font-size: 1vw;
    padding: 0;
    margin:0.5vw;
  }

  .point-selector-btn{
    margin-top: 1vw;
  }
</style>
