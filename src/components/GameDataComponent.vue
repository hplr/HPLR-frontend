<script setup lang="ts">

import { GameData } from 'components/models';

const props = defineProps<{
  gameData: GameData | undefined;
}>();


import LocationComponent from 'components/LocationComponent.vue';
import { ref } from 'vue';

import 'src/css/gameCreatorPage.css'
import GenericOptionSelector from 'components/GenericOptionSelector.vue';


const defaultGameData: GameData = {
  ranking: false,
  gamePointSize: 0,
  gameTurnLength: 0,
  gameTime: 0,
  gameStartTime: undefined,
  gameMission: '',
  gameDeployment: '',
  locationSaveDto: undefined,
};

const gameDataObject = ref<GameData>(
  props?.gameData !== undefined
    ? { ...defaultGameData, ...props.gameData }
    : defaultGameData
);
function saveGameDataObject(){
  console.log(gameDataObject.value)
  return gameDataObject
}
defineExpose({
  saveGameDataObject
})

</script>

<template>
  <div class="game-data-wrapper">
    <div class="game-data-left-wrapper">
        <q-checkbox
          left-label
          v-model="gameDataObject.ranking"
          label="Ranking game"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
        />
      <div class="game-data-column-wrapper">
        <div class="game-data-column">
          <div class="game-data-column">
            <q-input class="game-data-input-field"
                     v-model="gameDataObject.gamePointSize"
                     label="Point limit" />
            <q-input class="game-data-input-field" v-model="gameDataObject.gameTime" label="Game duration(H)" />
            <GenericOptionSelector class="game-data-input-field" v-model="gameDataObject.gameDeployment" :api-link="'http://localhost:8083/game/deployment'" />
          </div>
        </div>
        <div class="game-data-column">
            <q-input class="game-data-input-field" v-model="gameDataObject.gameTurnLength" label="Max number of turns" />
            <q-input class="game-data-input-field" filled v-model="gameDataObject.gameStartTime">
            <template v-slot:prepend>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="gameDataObject.gameStartTime" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>

            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time v-model="gameDataObject.gameStartTime" mask="YYYY-MM-DD HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
            </q-input>
            <GenericOptionSelector class="game-data-input-field" v-model="gameDataObject.gameMission" :api-link="'http://localhost:8083/game/mission'" ></GenericOptionSelector>
        </div>
      </div>
    </div>
    <div class="game-location-wrapper">
      <LocationComponent v-model="gameDataObject.locationSaveDto" :game-location="gameDataObject.locationSaveDto"></LocationComponent>
    </div>

  </div>
</template>

<style scoped>

.game-data-wrapper {
  display: flex;
  flex-direction: row;

}
.game-data-left-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 4vw;
}


.game-data-boolean-wrapper *{
  display: flex;
  align-items: center !important;
  align-content: center !important;
}

.game-data-column-wrapper {
  display: flex;
  flex-direction: row;
}
.game-data-column{
  width: 50%;
}

.game-data-left-wrapper {
  width: 70%;
}

.game-location-wrapper {
  width: 60%;
  padding-left: 3vw;
}

</style>
