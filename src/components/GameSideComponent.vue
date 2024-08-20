<script setup lang="ts">

import PlayerComponent from 'components/PlayerComponent.vue';

// Define props with v-model capability
const props = defineProps<{
  sideName?: string;
  modelValue: GameSide; // Accept the v-model value from the parent
}>();

import { defineEmits, reactive, ref, watch } from 'vue';
import PlayerSimpleSearchComponent from 'components/PlayerSimpleSearchComponent.vue';
import { GameSide, PlayerSnapshot } from 'components/models';

// Define the emit to notify parent of changes
const emit = defineEmits(['update:modelValue']);

// Reactive object to track the game side data
const defaultGameSideObject = reactive<GameSide>({
  ...props.modelValue // Initialize with the value from v-model
});

interface PlayerSnapshotHandler {
  label: string;
  value?: PlayerSnapshot;
}
// Ref to track selected player snapshot
const playerSnapshot = ref<PlayerSnapshotHandler>({
  'label': '',
  'value': undefined
});

const playerSnapshotList=ref<Array<PlayerSnapshotHandler>>([])

function addPlayer(playerSnapshot: PlayerSnapshotHandler) {
  if (defaultGameSideObject.playerDataList !== undefined) {
    playerSnapshotList.value.push(playerSnapshot)
    const playerId = playerSnapshot.value?.userId.id ?? 'default-id'; // Provide a fallback ID if undefined
    const playerName = playerSnapshot.value?.userData.nickname ?? 'Anonymous'; // Provide a fallback ID if undefined
    defaultGameSideObject.playerDataList.push({
      playerId: playerId,
      playerName: playerName,
      primaryArmy: {
        armyName: '',
        armyType: '',
        pointValue: 0
      },
      allyArmyList: []
    });
  }
}

function saveGameSideObject():GameSide {
  console.log(defaultGameSideObject);
  emit('update:modelValue', { ...defaultGameSideObject }); // Emit the updated value to the parent
  return {
    ...defaultGameSideObject
  };
}

// Watch the defaultGameSideObject for any changes and emit updates automatically
watch(defaultGameSideObject, (newValue) => {
  console.log(newValue)
  emit('update:modelValue', { ...newValue });
}, { deep: true });

defineExpose({
  saveGameSideObject
});

</script>

<template>
  <div class="wrapper">
    <div class="side-name-wrapper">
      <h1>{{ props.sideName }} </h1>
    </div>
    <div class="player-list-wrapper">
      <PlayerSimpleSearchComponent v-model="playerSnapshot"></PlayerSimpleSearchComponent>
      <q-btn flat label="Add player" @click="addPlayer(playerSnapshot)" class="add-player-btn" />
      <div v-for="(playerKey, index) in defaultGameSideObject.playerDataList" :key="index" class="player-div">
        <PlayerComponent v-model="defaultGameSideObject.playerDataList[index]" :player="playerKey" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.wrapper {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 2vw;
  max-width: 45vw;
}
.side-name-wrapper {
  display: flex;
  align-items: center;
  align-content: center;
  max-width: 20%;
}
h1 {
  font-size: 3vw;
}
.player-list-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 90%;
}
.player-div {
  margin: 0;
  border: 1px solid black !important;
  border-radius: 1vw;
  padding: 1vw;
}
.add-player-btn {
  margin: 1vw;
}
.save-btn {
  margin-top: 1vw;
}
</style>
