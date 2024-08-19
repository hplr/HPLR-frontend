<script setup lang="ts">
import { defineEmits, defineProps, reactive, watch } from 'vue';
import { ArmyData } from 'components/models';

const props = defineProps<{
  armyData: ArmyData;
}>();

const emit = defineEmits(['update:army-data']);

const localArmyData = reactive({ ...props.armyData });

// Watch for changes in localArmyData and emit them
watch(
  () => localArmyData,
  (newValue) => {
    emit('update:army-data', { ...newValue });
  },
  { deep: true }
);
</script>

<template>
  <!-- Example input fields for editing army data -->
  <q-input v-model="localArmyData.armyName" label="Army Name" />
  <q-input v-model="localArmyData.armyType" label="Army Type" />
  <q-input v-model.number="localArmyData.pointValue" label="Point Value" />
</template>

<style scoped>
.army-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.army-wrapper * {
  margin: 0;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2vw;
}
</style>
