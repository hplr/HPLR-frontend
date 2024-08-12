<script setup lang="ts">

import LocationComponent from 'components/LocationComponent.vue';
import { ref } from 'vue';
import { GameData } from 'components/models';
import DeploymentSelector from 'components/DeploymentSelector.vue';
import MissionSelector from 'components/MissionSelector.vue';

const gameDataObject = ref<GameData>({
  'ranking': false,
  'gamePointSize': 0,
  'gameTurnLength': 0,
  'gameTime': 0,
  'gameStartTime': null,
  'gameMission': '',
  'gameDeployment': '',
  'locationSaveDto': undefined
});
</script>

<template>    <div class="game-save-btn-wrapper">
  <q-btn v-model="gameDataObject.ranking" label="Save game">

  </q-btn>
</div>
  <div class="game-data-wrapper">
    <div class="game-data-left-wrapper">
      <div class="game-data-boolean-wrapper">
        <q-checkbox
          left-label
          v-model="gameDataObject.ranking"
          label="Ranking game"
          checked-icon="task_alt"
          unchecked-icon="highlight_off"
        />
      </div>

      <div class="game-data-column-wrapper">
        <div class="game-data-column">
          <div class="input-wrapper">
            <q-input :model-value="gameDataObject.gamePointSize" label="Point limit" />
          </div>
          <div class="input-wrapper">
            <q-input :model-value="gameDataObject.gameTime" label="Game duration(H)" />
          </div>
          <div class="selector-wrapper">
            <DeploymentSelector></DeploymentSelector>
          </div>
        </div>
        <div class="game-data-column">
          <div class="input-wrapper">
            <q-input :model-value="gameDataObject.gameTurnLength" label="Max number of turns" />
          </div>
          <div class="input-wrapper">
            <q-input filled v-model="gameDataObject.gameStartTime">
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
          </div>
          <div class="selector-wrapper">
            <MissionSelector></MissionSelector>
          </div>
        </div>
      </div>
    </div>
    <div class="game-location-wrapper">
      <LocationComponent></LocationComponent>
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
  width: 100%;
  margin-left: 4vw;
}
.game-data-boolean-wrapper{
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: 45%;
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
  width: 30%;
}

.input-wrapper, .selector-wrapper{
  margin: 1vw;
}

.game-save-btn-wrapper{
  display: flex;
  justify-content: right;
  align-items: center;
  padding-left: 10vw;
}
</style>
