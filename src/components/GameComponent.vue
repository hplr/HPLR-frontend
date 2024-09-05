<script setup lang="ts">
import { GameSnapshot } from 'components/models';
import { ref } from 'vue';

const props = defineProps<{
  gameData: GameSnapshot;
}>();

const gameStartDate = ref<Array<string>>()
const gameEndDate = ref<Array<string>>()

console.log(props.gameData.gameId.gameId);

gameStartDate.value = props.gameData.gameData.gameStartTime.split('T')
gameEndDate.value = props.gameData.gameData.gameEndTime.split('T')
if(gameEndDate.value?.at(0) === gameStartDate.value?.at(0)){
  gameEndDate.value[0] = ''
}
</script>

<template>
  <div class="game-snapshot-wrapper">
<!--    <h6>{{ // gameData.gameId.gameId }}</h6>-->
    <div class="game-snapshot-data-wrapper">
      <div class="game-snapshot-side-wrapper">
        <h6>{{ gameData.firstGameSide.allegiance }}</h6>
        <div class="game-snapshot-player-wrapper" v-for="sidePlayer in gameData.firstGameSide.gameSidePlayerDataList"
             :key="sidePlayer.player.userId.id">
          <h6>{{ sidePlayer.player.userData.nickname }}</h6>
        </div>
      </div>

      <div class="game-snapshot-side-wrapper" v-if="gameData.secondGameSide!==null">
        <h6>{{ gameData.secondGameSide.allegiance }}</h6>
        <div class="game-snapshot-player-wrapper" v-for="sidePlayer in gameData.secondGameSide.gameSidePlayerDataList"
             :key="sidePlayer.player.userId.id">
          <h6>{{ sidePlayer.player.userData.nickname }}</h6>
        </div>
      </div>

    </div>
    <div class="game-snapshot-gameData-wrapper">
      <h6 class = "game-snapshot-data-item">Deployment: {{gameData.gameData.gameDeployment.name}}</h6>
      <h6 class = "game-snapshot-data-item">Mission: {{gameData.gameData.gameMission.name}}</h6>
      <h6 class = "game-snapshot-data-item">Played: {{gameStartDate?.at(0)}} {{gameStartDate?.at(1)}} - {{gameEndDate?.at(0)}} {{gameEndDate?.at(1)}}</h6>
      <h6 class="game-snapshot-ranked game-snapshot-data-item" v-if="gameData.gameData.ranking">RANKING GAME</h6>
      <h6 class="game-snapshot-unranked game-snapshot-data-item" v-else>NON-RANKING GAME</h6>
    </div>

  </div>
</template>

<style scoped>
.game-snapshot-wrapper {
  margin:2vw;
  padding: 2vw;
  width: 30vw;
  border-radius: 3vw;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.5) !important;
  text-align: center;
  align-content: center;
  justify-content: center;
}

.game-snapshot-data-wrapper {
  display: flex;
  justify-content: space-between;
}

.game-snapshot-ranked{
  color:red;
}
.game-snapshot-unranked{
  color:green;
}
.game-snapshot-data-item {
  padding:0;
  margin: 0.2vw;
}

.game-snapshot-side-wrapper * {
  padding: 0;
  margin:0.2vw;
}
</style>
