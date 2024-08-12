<script setup lang="ts">

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  armyData?: ArmyData
}>();
import { ref } from 'vue';
import ArmySelector from 'components/ArmySelector.vue';
import { ArmyData } from 'components/models';


function saveArmy() {
  isBlocked.value = true;
  console.log(isBlocked.value);
}

const isBlocked = ref(false);


</script>

<template>
  <div class="army-wrapper">
    <q-input :model-value="armyData?.armyName" :disable="isBlocked" label="Army Name" name="aaa">
    </q-input>

    <ArmySelector :disable-var="isBlocked"></ArmySelector>
    <q-input :model-value="armyData?.pointValue" :disable="isBlocked">
    </q-input>
    <div class="btn-wrapper">
      <q-btn @click="saveArmy" :disable=false>Save</q-btn>
    </div>

  </div>
</template>

<style scoped>
.army-wrapper {
  margin: 1vw;
  max-width: 80%;
}

.btn-wrapper {
  margin-top: 2vw
}
</style>
