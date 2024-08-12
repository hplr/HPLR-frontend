<template>
  <div class="army-selector-wrapper">
    <q-select
      :loading="fetchingDeployments"
      v-model="selectedDeployment"
      :options="deployments"
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

const deployments = ref([])
let selectedDeployment = ref()
const fetchingDeployments = ref(false)

async function fetchDeployments() {
  fetchingDeployments.value = true
  const fetcher = await axios.get('http://localhost:8083/game/deployment')
  const data = await fetcher.data
  fetchingDeployments.value = false
  deployments.value = data.map((val:GameArmyType) => {
    return {
      label:val.name,
      value:val.name
    }
  })
  selectedDeployment.value = deployments.value?.[props.id]
  console.log(selectedDeployment.value)
  console.log(deployments.value)

}

fetchDeployments()

// const todoCount = computed(() => props.todos.length);
</script>

<style scoped>
 .army-selector-wrapper{
   max-width: 80%;
 }
</style>
