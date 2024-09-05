<template>
  <div class="main-wrapper">

    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title @click="$router.push('/')" style="cursor: pointer">
            Heresy Polish League Ranking
          </q-toolbar-title>
          <PlayerMenuComponent :token = "token"/>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        bordered
      >
        <q-list>
          <q-item-label
            header
          >
            Navigation
          </q-item-label>

          <EssentialLink
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import '../css/landingPage.css'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';
import PlayerMenuComponent from 'components/PlayerMenuComponent.vue';
import { JWTToken, PlayerSnapshot } from 'components/models';
import { useCookies } from 'vue3-cookies';
import * as JWT from 'jwt-decode';

defineOptions({
  name: 'MainLayout'
});

const linksList: EssentialLinkProps[] = [
  {
    title: 'Discord',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const token = ref<string | undefined>(undefined); // Token state

async function checkToken() {
  const cookies = useCookies();
  console.log(cookies.cookies.get('token'))
  if( cookies.cookies.get('token')===null){
    return undefined
  }
  const token: JWTToken = JWT.jwtDecode(cookies.cookies.get('token'))
  const response = await fetch('http://localhost:8083/player/'+token.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {

    return undefined
  }

  const fetchedPlayer: PlayerSnapshot = await response.json();

  return fetchedPlayer.userData.email
}

onMounted(async () => {
  token.value = await checkToken(); // Set the token value once the Promise resolves
});
</script>

<style scoped>
.main-wrapper {
  background-color: black;
}
</style>
