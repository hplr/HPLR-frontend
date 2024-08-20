<script setup lang="ts">


// Define the props for the component
interface Props {
  apiLink: string;          // API link to fetch options
  modelValue: string | null; // The value to bind with v-model
}

// Use withDefaults to set default values if needed
const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
});

import axios from 'axios';
import { ref, computed, watch } from 'vue';

// References to store options, selected value, and loading state
const options = ref<{ label: string; value: string }[]>([]);
const fetchingOptions = ref(false);

// Fetch options from the API
async function fetchOptions() {
  if (!props.apiLink) {
    console.error('API link is required');
    return;
  }

  fetchingOptions.value = true;
  try {
    const response = await axios.get(props.apiLink);
    const data = response.data;
    // Map the API data to the format expected by QSelect
    options.value = data.map((item: { name: string }) => ({
      label: item.name,
      value: item.name, // Persist the name as the value
    }));
  } catch (error) {
    console.error('Error fetching options:', error);
  } finally {
    fetchingOptions.value = false;
  }
}

// Call fetchOptions on component mount
fetchOptions();

// Computed property to handle v-model
const selectedValue = computed({
  get() {
    console.log(props.modelValue)
    return props.modelValue;
  },
  set(newValue: string | null) {
    emit('update:modelValue', newValue);
  },
});

// Emit event for updating the modelValue in the parent component
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void;
}>();

// Watch for changes in modelValue and log them (optional)
watch(selectedValue, (newValue) => {
  console.log('Selected value changed:', newValue);
});
</script>

<template>
  <div class="option-selector-wrapper">
    <q-select
      :loading="fetchingOptions"
      v-model="selectedValue"
      :options="options"
      label="Select Option"
      clearable
    />
  </div>
</template>
