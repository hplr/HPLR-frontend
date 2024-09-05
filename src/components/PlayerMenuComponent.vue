<script setup lang="ts">
import { defineProps } from 'vue';
import { useCookies } from 'vue3-cookies';
import {useRouter} from 'vue-router';
const router = useRouter();

const props = defineProps<{
  token: string | undefined;
}>();
function onItemClick () {
  console.log('Clicked on an Item')
}

function logOut() {
  useCookies().cookies.remove('token')
  router.push('/')
  location.reload();
}
</script>

<template>
  <div class="q-pa-md">

    <div v-if="props.token!==undefined">
      <q-avatar>
        <img alt="avatar" src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>
      <q-btn-dropdown color="primary" :label="props.token.valueOf()" class="dropdown-list">

        <q-list>
          <q-item clickable v-close-popup @click="onItemClick">
            <q-item-section>
              <q-item-label>My account</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="logOut">
            <q-item-section>
              <q-item-label>Log out</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-btn-dropdown>
    </div>
    <div v-else>

      <q-btn class="login-button" @click="$router.push('login')">
        <h6 class="login-text">Log in</h6>
      </q-btn>
    </div>

  </div>
</template>

<style scoped>
  .login-button{
    height:1vw;
  }
  .login-text{
    line-height: 10%;
    margin:0;
  }
</style>
