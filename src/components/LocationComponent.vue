<script setup lang="ts">

const props = defineProps<{
  gameLocation: GameLocation | undefined;
}>();

import { ref, watch, defineProps, defineEmits } from 'vue';

interface GameLocation {
  name: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  isPrivate: boolean;
}

const defaultGameLocationObject: GameLocation = {
  'name': '',
  'country': '',
  'city': '',
  'street': '',
  'houseNumber': '',
  'isPrivate': false
};

// Define emits
const emit = defineEmits(['update:modelValue']);


const gameLocationObject = ref<GameLocation>(
  props?.gameLocation !== undefined
    ? { ...defaultGameLocationObject, ...props.gameLocation } // Merge defaults with provided data
    : defaultGameLocationObject // Use default data if props.gameData is undefined
);

watch(gameLocationObject, (newValue) => {
  if (newValue.isPrivate) {
      newValue.country = '';
      newValue.city = '';
      newValue.street = '';
      newValue.houseNumber = '';
  }
  emit('update:modelValue', newValue);
}, { deep: true });


</script>

<template>
  <div class="checkbox-wrapper">
    <q-checkbox
      left-label
      v-model="gameLocationObject.isPrivate"
      label="Private location"
      checked-icon="task_alt"
      unchecked-icon="highlight_off"
    />
  </div>
  <q-input class="game-data-input-field" v-model="gameLocationObject.name" label="Name" />
  <q-input class="game-data-input-field" v-model="gameLocationObject.country" :disable="gameLocationObject.isPrivate"
           label="Country" />
  <q-input class="game-data-input-field" v-model="gameLocationObject.city" :disable="gameLocationObject.isPrivate"
           label="City" />
  <q-input class="game-data-input-field" v-model="gameLocationObject.street" :disable="gameLocationObject.isPrivate"
           label="Street" />
  <q-input class="game-data-input-field" v-model="gameLocationObject.houseNumber"
           :disable="gameLocationObject.isPrivate" label="House Number" />

</template>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.game-data-input-field {
  width: 15vw !important;
}
</style>
