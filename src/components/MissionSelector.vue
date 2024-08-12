<template>
  <div class="army-selector-wrapper">
    <q-select
      :loading="fetchingMissions"
      v-model="selectedMission"
      :options="missions"
      :disable="disableVar"
    />
  </div>
</template>

<script setup lang="ts">




const props = withDefaults(defineProps<Props>(), {
  id: () =>1,
  disableVar: () => false
});


import axios from 'axios';
import {ref} from 'vue'
import { GameArmyType } from 'components/models';
interface Props{
  id:number,
  disableVar:boolean
}

const missions = ref([])
let selectedMission = ref()
const fetchingMissions = ref(false)

async function fetchMissions() {
  fetchingMissions.value = true
  const fetcher = await axios.get('http://localhost:8083/game/mission')
  const data = await fetcher.data
  fetchingMissions.value = false
  missions.value = data.map((val:GameArmyType) => {
    return {
      label:val.name,
      value:val.name
    }
  })
  selectedMission.value = missions.value?.[props.id]
  console.log(selectedMission.value)
  console.log(missions.value)

}

fetchMissions()

// const todoCount = computed(() => props.todos.length);
</script>

<style scoped>
 .army-selector-wrapper{
   max-width: 80%;
 }
</style>
