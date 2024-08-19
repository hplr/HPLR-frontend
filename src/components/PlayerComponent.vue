<template>
  <div class="player-name-wrapper">
    <h3>{{ playerSnapshot?.userData.nickname || 'Default player' }}</h3>
  </div>
  <div class="player-wrapper">
    <div class="primary-army-wrapper">
      <h6>Primary army</h6>
      <ArmyComponent
        :army-data="playerDataObject.primaryArmy"
      />
    </div>
    <div class="ally-army-list-wrapper">
      <h6>Allied armies</h6>
      <q-list>
        <q-item v-for="(army, index) in playerDataObject.allyArmyList" :key="index" class="army-div">
          <ArmyComponent
            :army-data="army"
            @update:army-data="(value: ArmyData) => updateAllyArmy(index, value)"
          />
        </q-item>
      </q-list>
      <q-btn align="left" flat label="Add ally army" @click="addAllyArmy" class="ally-army-btn" />
    </div>
    <q-btn align="left" flat label="Save player" @click="savePlayer" class="ally-army-btn" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch } from 'vue';
import ArmyComponent from 'components/ArmyComponent.vue';
import { PlayerData, PlayerSnapshot, ArmyData } from 'components/models';

const emit = defineEmits(['update:modelValue']);

const defaultPlayerDataObject: PlayerData = {
  playerId: '',
  primaryArmy: ArmyData,
  allyArmyList: []
};

const props = defineProps<{
  player: PlayerData | undefined;
  playerSnapshot: PlayerSnapshot | undefined;
}>();

const playerDataObject = reactive<PlayerData>({
  ...defaultPlayerDataObject,
  ...props.player,
});


function updateAllyArmy(index: number, updatedArmy: ArmyData) {
  playerDataObject.allyArmyList[index] = { ...updatedArmy };
}

function addAllyArmy() {
  playerDataObject.allyArmyList.push({
    armyName: `Army ${playerDataObject.allyArmyList.length + 1}`,
    armyType: 'Questoris Knights',
    pointValue: 0,
  });
}

// Watch for changes in the entire playerDataObject and emit them to the parent component
watch(
  () => playerDataObject,
  (newValue) => {
    console.log(newValue)
    emit('update:modelValue', { ...newValue });
  },
  { deep: true }
);


</script>


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
