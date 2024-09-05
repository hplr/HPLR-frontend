<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { GameSnapshot, JWTToken} from 'components/models';
import * as JWT from 'jwt-decode';
import { useCookies } from 'vue3-cookies';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import GameComponent from 'components/GameComponent.vue';

const props = defineProps<{
  type: string;
}>();

const gameList = ref<Array<GameSnapshot>>([]);
const cookies = useCookies();
const $q = useQuasar();
const token: JWTToken | undefined = cookies.cookies.get('token') ? JWT.jwtDecode(cookies.cookies.get('token')) : undefined;
const router = useRouter();

async function fetchGameList(token: JWTToken): Promise<Array<GameSnapshot>>{
  const response = await fetch('http://localhost:8083/game/'+props.type.toUpperCase()+'/'+token.id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {

    $q.notify({
      message: response.status.toString(),
      icon: 'report_problem',
      color: 'negative'
    });
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const gamesList: Array<GameSnapshot> = await response.json();
  console.log(gamesList)
  return gamesList
}

onMounted(async () => {
  if(token === undefined){
    await router.push('/')
  }
  else {
    gameList.value = await fetchGameList(token);
    console.log(gameList);
  }
});
</script>

<template>
  <div class="game-list-wrapper">
    <div class="game-wrapper" v-for="game in gameList" :key="game.gameId.gameId">
      <GameComponent :game-data="game"/>
    </div>
  </div>
</template>

<style scoped>
  .game-list-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

</style>
