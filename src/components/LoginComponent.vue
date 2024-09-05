<script setup lang="ts">
import { ref } from 'vue';
import { LoginForm, SecurityResponse } from 'components/models';
import { useQuasar } from 'quasar';
import { useCookies } from 'vue3-cookies';
import {useRouter} from 'vue-router';
const router = useRouter();

const props = defineProps<{
  loginForm: LoginForm | undefined;
}>();

const defaultLoginForm: LoginForm = {
  email: '',
  passwordPlain: ''
};


const loginFormObject = ref<LoginForm>(
  props?.loginForm !== undefined
    ? { ...defaultLoginForm, ...props.loginForm }
    : defaultLoginForm
);

const $q = useQuasar();

async function logInAttempt(): Promise<void>  {
  const response = await fetch('http://localhost:8083/player/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginFormObject.value)
  });

  if (!response.ok) {

    $q.notify({
      message: response.status.toString(),
      icon: 'report_problem',
      color: 'negative'
    });
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const token: SecurityResponse = await response.json();

  useCookies().cookies.set('token',token.token)
  await router.push('/')
  location.reload();
}

</script>

<template>
  <div class="login-component-wrapper">
    <h4>Log in</h4>
    <q-input class="game-data-input-field" v-model.number="loginFormObject.email" label="E-mail" />
    <q-input class="game-data-input-field" filled type="password" v-model="loginFormObject.passwordPlain"
              label="Password"/>
    <q-btn class="login-btn" label="Log in" @click="logInAttempt()"></q-btn>
    <q-btn class="login-btn" label="Register" @click="$router.push('/register')"></q-btn>
  </div>
</template>

<style scoped>
  .login-component-wrapper{
    height:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .login-component-wrapper .game-data-input-field{
    padding:0.5vw;
  }

  .login-btn{
    margin-top:3vw;
  }

</style>
