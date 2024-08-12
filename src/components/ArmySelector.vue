<template>
  <div class="army-selector-wrapper">
    <q-select
      :loading="fetchingArmy"
      v-model="selectedArmy"
      :options="armies"
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

const armies = ref([])
let selectedArmy = ref()
const fetchingArmy = ref(false)

async function fetchArmies() {
  fetchingArmy.value = true
  const fetcher = await axios.get('http://localhost:8083/game/army')
  const data = await fetcher.data
  fetchingArmy.value = false
  armies.value = data.map((val:GameArmyType) => {
    return {
      label:val.name,
      value:val.name
    }
  })
  selectedArmy.value = armies.value?.[props.id]
  console.log(selectedArmy.value)
  console.log(armies.value)

}

fetchArmies()

// const todoCount = computed(() => props.todos.length);
</script>

<style scoped>
 .army-selector-wrapper{
   max-width: 80%;
 }
</style>
