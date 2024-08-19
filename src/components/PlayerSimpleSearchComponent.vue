<script setup lang="ts">
import { ref, watch } from 'vue';
import axios from 'axios';

interface PlayerSnapshot {
  userId: {
    id: string;
  };
  userData: {
    name: string;
    nickname: string;
    email: string;
    motto: string;
  };
  playerRanking: {
    score: number;
  };
  playerSecuritySnapshot: {
    registrationTime: Date;
    lastLogin: Date;
  };
}

const options = ref<{ label: string; value: PlayerSnapshot }[]>([]);
const model = ref<{
  label: string,
  value:PlayerSnapshot
} | null>(null); // Changed to null instead of undefined
const emit = defineEmits(['update:modelValue']);


async function fetchPlayerSnapshots() {
  try {
    const response = await axios.get<PlayerSnapshot[]>('http://localhost:8083/player/getAll');
    options.value = response.data.map(player => ({
      label: player.userData.nickname,
      value: player
    }));
  } catch (error) {
    console.error('Failed to fetch player snapshots:', error);
  }
}

function filterFn(val: string, update: (callback: () => void) => void, abort: () => void) {
  if (val.length < 2) {
    abort();
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    options.value = options.value.filter(v =>
      v.value.userData.nickname.toLowerCase().includes(needle)
    );
  });
}

fetchPlayerSnapshots();


watch(model, (newValue) => {
  emit('update:modelValue', newValue);
  console.log(model.value?.value)
}, { deep: true });


</script>

<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        hint="Minimum 2 characters to trigger filtering"
        filled
        v-model="model"
        :options="options"
        label="Standard"
        @filter="filterFn"
        color="teal"
        clearable
        options-selected-class="text-deep-orange"
      >
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section>
              <q-item-label>{{ scope.opt.label }}</q-item-label>
              <q-item-label caption>{{ scope.opt.value.userData.email }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<style scoped></style>
