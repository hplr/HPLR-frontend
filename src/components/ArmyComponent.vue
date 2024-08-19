<script setup lang="ts">


const props = defineProps<{
  armyData: ArmyData | undefined;
}>();

import { ref, watch, defineProps, defineEmits } from 'vue';
import GenericOptionSelector from 'components/GenericOptionSelector.vue';

export interface ArmyData{
  'armyType': string,
  'armyName': string,
  'pointValue': number
}


const defaultArmyData: ArmyData = {
  'armyType': '',
  'armyName': '',
  'pointValue': 0
};

// Define emits
const emit = defineEmits(['update:modelValue']);


const armyDataObject = ref<ArmyData>(
  props?.armyData !== undefined
    ? { ...defaultArmyData, ...props.armyData } // Merge defaults with provided data
    : defaultArmyData // Use default data if props.gameData is undefined
);

watch(armyDataObject, (newValue) => {
  emit('update:modelValue', newValue);
}, { deep: true });

function saveArmyDataObject(){
  console.log(armyDataObject.value)
  return armyDataObject
}
</script>

<template>
  <div class="army-wrapper">
    <q-input
      v-model="armyDataObject.armyName"
      label="Army Name"
      class="game-data-input-field"
    />

    <GenericOptionSelector
      v-model="armyDataObject.armyType"
      class="game-data-input-field"
      :api-link="'http://localhost:8083/game/army'"
    />

    <q-input
      v-model.number="armyDataObject.pointValue"
      label="Point Value"
      class="game-data-input-field"
    />

    <div class="btn-wrapper">
      <q-btn flat @click="saveArmyDataObject" :disable="false">Save</q-btn>
    </div>
  </div>
</template>

<style scoped>

</style>
