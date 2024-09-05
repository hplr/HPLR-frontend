<template>
  <q-page class="row items-center justify-evenly landing-page hplr-page">
    <q-card class="landing-page-card">
      <q-card-section class="landing-page-card-section login-page-card-section">
        <login-component :login-form="loginForm" />
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LoginForm } from 'components/models';
import LoginComponent from 'components/LoginComponent.vue';


const loginForm = ref<LoginForm>(
  {
    email: '',
    passwordPlain: ''
  }
);

</script>
<style>
.login-page-card-section{
  background: rgba(255, 255, 255, 0.8) !important;
  color: black !important;

}
.login-page-card-section:hover {
  cursor: default;
  background: rgba(255, 255, 255, 0.8) !important;

}


</style>
