<template>
  <q-page class="row items-center justify-evenly landing-page hplr-page">
    <q-card class="landing-page-card">
      <q-card-section class="landing-page-card-section register-page-card-section">
        <RegisterComponent :register-form="registerForm"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RegisterForm } from 'components/models';
import RegisterComponent from 'components/RegisterComponent.vue';


const registerForm = ref<RegisterForm>(
  {
    name: '',
    nickname: '',
    email: '',
    motto: '',
    password: '',
    repeatedPassword: ''
  }
);

</script>
<style>
.register-page-card-section{
  background: rgba(255, 255, 255, 0.8) !important;
  color: black !important;


}
.register-page-card-section:hover {
  cursor: default;
  background: rgba(255, 255, 255, 0.8) !important;
}


</style>
