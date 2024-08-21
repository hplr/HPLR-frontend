<script setup lang="ts">


// Define the props for the component
interface Props {
  apiLink: string;
  modelValue: {
    label:string,
    value:string
  } | null;  // Expect only a string or null
}

// Set default prop values
const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
});

import { defineProps, withDefaults, ref, computed, defineEmits } from 'vue';
import axios from 'axios';

// Reference to store options and loading state
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
    options.value = data.map((item: { name: string }) => ({
      label: item.name,
      value: item.name,
    }));
  } catch (error) {
    console.error('Error fetching options:', error);
  } finally {
    fetchingOptions.value = false;
  }
}

// Call fetchOptions on component mount
fetchOptions();

// Emit event to update modelValue in the parent component
const emit = defineEmits<{
  (e: 'update:modelValue', value: {label:string, value:string} | null): void;
}>();

// Computed property to handle v-model
const selectedValue = computed({
  get() {
    console.log(props.modelValue)
    return props.modelValue;  // Return the string value
  },
  set(newValue: { label:string, value:string } | null) {
    emit('update:modelValue', newValue);  // Emit the string value
  },
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
