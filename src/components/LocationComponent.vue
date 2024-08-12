<script setup lang="ts">
import { ref } from 'vue';
import {GameLocation} from 'components/models';
const gameLocationObject= ref<GameLocation>({
  'name': '',
  'country': '',
  'city': '',
  'street': '',
  'houseNumber': '',
  'isPrivate': false
  }
);

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
  <q-input :model-value="gameLocationObject.name"  label="Name"/>
  <q-input :model-value="gameLocationObject.country" :disable="gameLocationObject.isPrivate" label="Country"/>
  <q-input :model-value="gameLocationObject.city" :disable="gameLocationObject.isPrivate" label="City"/>
  <q-input :model-value="gameLocationObject.street" :disable="gameLocationObject.isPrivate" label="Street"/>
  <q-input :model-value="gameLocationObject.houseNumber" :disable="gameLocationObject.isPrivate" label="House Number"/>

</template>

<style scoped>
.checkbox-wrapper{
  display: flex;
  padding-left: 6vw;
}
</style>
