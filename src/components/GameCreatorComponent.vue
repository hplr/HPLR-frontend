<script setup lang="ts">

import GameSideAggregateComponent from 'components/GameSideAggregateComponent.vue';
import { ref } from 'vue';
import GameDataComponent from 'components/GameDataComponent.vue';

withDefaults(defineProps<Props>(), {
  title: () => 'a'
});

interface Props {
  title: string;
}


const gameSides = ref<string[]>([
  'First side'
]);

function addSecondSide() {
  gameSides.value.push(
    'Second side'
  );
}
</script>

<template>
  <q-form class="q-form">
    <div class="game-creator-wrapper">
      <div class="game-data-wrapper">
        <GameDataComponent/>
      </div>
      <div class='game-side-list-wrapper'>
        <div v-for="(side,index) in gameSides" :key="index" class="game-side-div">
          <GameSideAggregateComponent :side-name="side" />
        </div>
        <div v-if="gameSides.length!=2" class="add-side-btn-wrapper">
          <q-btn @click="addSecondSide" label="Add second side"/>
        </div>
      </div>
    </div>
  </q-form>

</template>

<style scoped>
.q-form{
width:90vw;
  margin-left: 5vw;
}
.game-data-wrapper {
  width:90%;

}
.game-side-list-wrapper {
  margin: 0;
  display: flex;
  flex-direction: row;
}

.add-side-btn-wrapper {
  margin-top: 12vw;
  margin-left: 10vw;
}
</style>
