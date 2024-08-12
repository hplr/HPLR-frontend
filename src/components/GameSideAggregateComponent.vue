<script setup lang="ts">

import PlayerComponent from 'components/PlayerComponent.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  sideName?:string
}>();

import { ref } from 'vue';
interface PlayerData {
  name: string;
}
const players = ref<PlayerData[]>([

]);
function addPlayer() {
  players.value.push({
    name: `Player ${players.value.length + 1}`,
  });
}
</script>
<template>
  <div class ="wrapper">
    <div class="side-name-wrapper">
      <h1>{{props.sideName}} </h1>

    </div>
    <div class="player-list-wrapper">
      <q-btn label="Add player" @click="addPlayer" class="add-player-btn"/>
      <div v-for="(player, index) in players" :key="index" class="player-div">
        <PlayerComponent :player="player" :index="index"  id="index"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .wrapper{
    border:1px solid black;
    display:flex;
    margin: 2vw;
    max-width: 45vw;
 }
  .side-name-wrapper{
    display: flex;
    align-items: center;
    align-content: center;
    max-width: 20%;
    margin:5vw;
  }
  h1{
    font-size: 3vw;
    margin:2vw;
  }
  .player-list-wrapper{
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin-right: 2vw;
  }
  .player-div{
    margin:0;
  }
  .add-player-btn{
    margin:1vw;
  }

</style>
