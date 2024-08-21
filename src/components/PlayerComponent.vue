<script setup lang="ts">
import { defineEmits, defineProps, reactive, watch } from 'vue';
import ArmyComponent from 'components/ArmyComponent.vue';
import { PlayerData } from 'components/models';

const emit = defineEmits(['update:modelValue']);

const defaultPlayerDataObject: PlayerData = {
  playerId: '',
  playerName: '',
  primaryArmy: {
    armyName: '',
    armyType: {label:'', value:''},
    pointValue: 0,
  },
  allyArmyList: [],
};

const props = defineProps<{
  player: PlayerData | undefined;
}>();

const playerDataObject = reactive<PlayerData>({
  ...defaultPlayerDataObject,
  ...props.player,
});


// Watch for changes in the entire playerDataObject
watch(
  () => playerDataObject,
  (newValue) => {
    emit('update:modelValue', { ...newValue });
  },
  { deep: true }
);


function addAllyArmy() {
  playerDataObject.allyArmyList.push({
    armyName: `Army ${playerDataObject.allyArmyList.length + 1}`,
    armyType: {label:'Questoris Knights', value:'Questoris Knights'},
    pointValue: 0,
  });
}
</script>

<template>
  <div class="player-name-wrapper">
    <h3>{{ playerDataObject.playerName || 'Default player' }}</h3>
  </div>
  <div class="player-wrapper">
    <div class="primary-army-wrapper">
      <h6>Primary army</h6>
      <ArmyComponent
        v-model="playerDataObject.primaryArmy"
        :army-data="playerDataObject.primaryArmy"
        :key="'primaryArmy'"
      />
    </div>
    <div class="ally-army-list-wrapper">
      <h6>Allied armies</h6>
      <q-list>
        <q-item v-for="(army, index) in playerDataObject.allyArmyList" :key="index" class="army-div">
          <ArmyComponent
            v-model="playerDataObject.allyArmyList[index]"
            :army-data="army"
          />
        </q-item>
      </q-list>
      <q-btn align="left" flat label="Add ally army" @click="addAllyArmy" class="ally-army-btn" />
    </div>
  </div>
</template>

<style scoped>
.player-name-wrapper {
  display: flex;
  justify-content: center;
}
.player-wrapper {
  display: flex;
  flex-direction: row;
  width: 40vw;
}
.primary-army-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.ally-army-list-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.ally-army-btn {
  margin-top: 2vw;
  align-self: center;
}
.army-div {
  margin: 0;
  padding: 0;
}
</style>
