<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  id: string
}>();
import { ref } from 'vue';

import { ArmyData } from 'components/models';
import ArmyComponent from 'components/ArmyComponent.vue';

// let primaryArmyVar: ArmyData;
const allyArmyList = ref<ArmyData[]>([]);


function addAllyArmy() {
  allyArmyList.value.push({
    armyName: `Army ${allyArmyList.value.length + 1}`,
    armyType: 'Questoris Knights',
    pointValue: 0
  });
}

let primaryIndex = 'p1';

let primaryArmyVar = {
  armyName: `Army ${primaryIndex}`,
  armyType: 'Questoris Knights',
  pointValue: 0
};
</script>

<template>
  <div class="player-wrapper">
    <div class="primary-army-wrapper">
      <h1>Primary army</h1>
      <ArmyComponent :army-data="primaryArmyVar" :key="primaryIndex" />
    </div>
    <div class="ally-army-list-wrapper">
      <h1> Allied armies</h1>
      <q-list>
        <ul v-for="(army,index) in allyArmyList" :key="index+'777'" class="army-div">
          <ArmyComponent :army-data="army" />
        </ul>
      </q-list>
      <q-btn label="Add ally army" @click="addAllyArmy" class="ally-army-btn"/>

    </div>

  </div>
</template>

<style scoped>
.player-wrapper {
  border: 2px solid red;
  display: flex;
  flex-direction: row;

}
.primary-army-wrapper{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  max-width: 50%;
  margin-right: 5vw;
}

h1{
  font-size: 2vw;
  margin-left: 2vw;
}

.ally-army-list-wrapper h1{
  margin-right: 2vw;
}

.ally-army-list-wrapper{
  display: flex;
  flex-direction: column;
  max-width: 50%;

}

.ally-army-btn {
  margin: 1vw;
}
</style>
