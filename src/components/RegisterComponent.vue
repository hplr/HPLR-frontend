<script setup lang="ts">
import { ref } from 'vue';
import { RegisterForm } from 'components/models';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps<{
  registerForm: RegisterForm | undefined;
}>();

const defaultRegisterForm: RegisterForm = {
  'name': '',
  'nickname': '',
  'email': '',
  'motto': '',
  'password': '',
  'repeatedPassword': ''
}

const registerFormObject = ref<RegisterForm>(
  props?.registerForm !== undefined
    ? { ...defaultRegisterForm, ...props.registerForm }
    : defaultRegisterForm
);

const $q = useQuasar();

async function registerAttempt(): Promise<void>  {
  const response = await fetch('http://localhost:8083/player/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registerFormObject.value)
  });

  if (!response.ok) {

    $q.notify({
      message: response.status.toString(),
      icon: 'report_problem',
      color: 'negative'
    });
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  await router.push('/login')
  location.reload();
}

</script>

<template>
  <div class="register-component-wrapper">
    <h4>Register</h4>
    <q-input class="register-data-input-field" v-model.number="registerFormObject.name" label="Name" />
    <q-input class="register-data-input-field" v-model.number="registerFormObject.nickname" label="Nickame" />
    <q-input class="register-data-input-field" v-model.number="registerFormObject.email" label="E-mail" />
    <q-input class="register-data-input-field" v-model.number="registerFormObject.motto" label="Motto" />
    <q-input class="register-data-input-field" filled type="password" v-model="registerFormObject.password"
              label="Password"/>
    <q-input class="register-data-input-field" filled type="password" v-model="registerFormObject.repeatedPassword"
              label="Repeat password"/>
    <q-btn class="login-btn" label="Register" @click="registerAttempt()"></q-btn>
    <q-btn class="login-btn" label="Log in" @click="$router.push('/login')"></q-btn>


  </div>
</template>

<style scoped>
  .register-component-wrapper{
    height:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .register-data-input-field{
    padding:0.5vw;
  }

  .login-btn{
    margin-top:1.5vw;
  }

</style>
