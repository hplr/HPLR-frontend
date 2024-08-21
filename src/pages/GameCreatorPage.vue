<template>
  <q-page class="row items-center justify-evenly  " padding>
    <q-btn flat label="Save game" color="primary" @click="saveGame"/>
    <q-card  class="landing-page-card" @click=" alert=true"  :class="savedData && validData?'landing-page-card-valid':'landing-page-card-invalid'">
      <q-card-section class="landing-page-card-section">
        <div class="landing-page-content image-holder">
          <svg width="800px" height="800px" viewBox="0 -2.5 40 40" xmlns="http://www.w3.org/2000/svg" >
            <title>craps</title>
            <desc>Created with Sketch.</desc>
            <g id="icons" stroke="none" stroke-width="1" fill-rule="evenodd">
              <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-990.000000, -542.000000)">
                <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path d="M961.998802,422.100461 L977.827723,426.337674 C979.390699,426.756064 980.318239,428.361044 979.899441,429.922496 L975.658094,445.735988 C975.239296,447.297441 973.63275,448.224076 972.069748,447.805679 L968.116396,446.746851 C967.901472,447.446596 967.431916,448.046113 966.780741,448.421703 L952.588919,456.607368 C951.187592,457.415636 949.395723,456.935974 948.586667,455.536014 L940.393015,441.358025 C939.583959,439.958065 940.064089,438.167942 941.465415,437.359675 L955.657237,429.174009 C956.109763,428.912998 956.61394,428.780409 957.132122,428.781544 L957.172177,428.782981 L958.410481,424.17016 C958.82928,422.608707 960.435825,421.682071 961.998802,422.100461 Z M956.676441,430.631194 L956.606676,430.662871 L956.538675,430.699217 L942.346853,438.884883 C941.825908,439.185357 941.624589,439.826504 941.862064,440.364013 L941.919711,440.477446 L950.113363,454.655434 C950.414131,455.175872 951.055903,455.376995 951.593937,455.139751 L951.70748,455.08216 L965.899303,446.896495 C966.099713,446.780901 966.256655,446.612376 966.357167,446.413556 L966.410598,446.290809 L960.954868,444.82956 C961.183921,445.518697 960.905749,446.296663 960.251644,446.673942 C959.503478,447.105475 958.546803,446.849384 958.114849,446.101947 C957.763267,445.493584 957.867672,444.74722 958.326227,444.255594 L958.429872,444.154288 L956.240853,443.568474 C954.733697,443.165026 953.8174,441.658232 954.129346,440.1512 L954.169093,439.983807 L954.537562,438.60552 C954.041259,438.556856 953.591345,438.274645 953.335218,437.831454 C952.903265,437.084018 953.159605,436.128274 953.907771,435.696742 C954.30391,435.468254 954.76823,435.42905 955.183804,435.567119 L955.337131,435.62718 L956.676441,430.631194 Z M954.910938,447.949923 L954.98006,448.083837 C955.311032,448.807986 955.042541,449.678487 954.338385,450.084636 C953.590219,450.516168 952.633543,450.260078 952.20159,449.512641 C951.769636,448.765205 952.025976,447.809462 952.774142,447.377929 C953.522308,446.946396 954.478984,447.202487 954.910938,447.949923 Z M966.847,446.202 L967.783,446.453 L967.783,446.452 L966.847,446.202 Z M952.521122,443.814677 L952.590244,443.948591 C952.921216,444.67274 952.652726,445.543241 951.94857,445.949389 C951.200404,446.380922 950.243728,446.124831 949.811774,445.377395 C949.379821,444.629958 949.636161,443.674215 950.384327,443.242682 C951.132493,442.81115 952.089169,443.06724 952.521122,443.814677 Z M960.152814,424.505049 L960.11329,424.625981 L955.871943,440.439472 C955.716254,441.019945 956.027701,441.61552 956.576069,441.82784 L956.697119,441.867326 L972.52604,446.104538 C973.107078,446.260075 973.703234,445.948931 973.915761,445.401098 L973.955286,445.280166 L978.196632,429.466675 C978.352321,428.886203 978.040874,428.290628 977.492506,428.078308 L977.371457,428.038822 L961.542536,423.80161 C960.961497,423.646073 960.365341,423.957216 960.152814,424.505049 Z M959.193,444.15 L959.19,444.152 L960.275,444.443 L960.273,444.44 L959.193,444.15 Z M950.131307,439.67943 L950.200429,439.813344 C950.531401,440.537493 950.26291,441.407994 949.558754,441.814143 C948.810589,442.245675 947.853913,441.989585 947.421959,441.242148 C946.990005,440.494712 947.246346,439.538968 947.994512,439.107436 C948.742677,438.675903 949.699353,438.931994 950.131307,439.67943 Z M969.74803,437.872203 C970.5825,438.095581 971.077712,438.952477 970.854116,439.786134 C970.630521,440.619791 969.772788,441.11452 968.938318,440.891142 C968.103847,440.667765 967.608636,439.810869 967.832231,438.977212 C968.055827,438.143554 968.913559,437.648825 969.74803,437.872203 Z M963.152646,436.106698 C963.987116,436.330076 964.482328,437.186972 964.258733,438.020629 C964.035137,438.854286 963.177405,439.349015 962.342934,439.125637 C961.508464,438.90226 961.013252,438.045364 961.236848,437.211706 C961.460443,436.378049 962.318175,435.88332 963.152646,436.106698 Z M971.411595,430.92679 C972.246065,431.150168 972.741277,432.007064 972.517682,432.840721 C972.294086,433.674378 971.436354,434.169107 970.601883,433.945729 C969.767413,433.722351 969.272201,432.865455 969.495797,432.031798 C969.719392,431.198141 970.577125,430.703412 971.411595,430.92679 Z M964.816211,429.161285 C965.650682,429.384663 966.145894,430.241559 965.922298,431.075216 C965.698702,431.908873 964.84097,432.403602 964.0065,432.180224 C963.172029,431.956846 962.676817,431.09995 962.900413,430.266293 C963.124009,429.432636 963.981741,428.937907 964.816211,429.161285 Z" id="craps">

                  </path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="landing-page-h6 landing-page-content">Create Game</div>
      </q-card-section>
    </q-card>

    <q-card  class="landing-page-card" @click=" firstSide=true"  :class="savedData && validData?'landing-page-card-valid':'landing-page-card-invalid'">
      <q-card-section class="landing-page-card-section">
        <div class="landing-page-content image-holder">
          <svg width="800px" height="800px" viewBox="0 -2.5 40 40" xmlns="http://www.w3.org/2000/svg" >
            <title>craps</title>
            <desc>Created with Sketch.</desc>
            <g id="icons" stroke="none" stroke-width="1" fill-rule="evenodd">
              <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-990.000000, -542.000000)">
                <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path d="M961.998802,422.100461 L977.827723,426.337674 C979.390699,426.756064 980.318239,428.361044 979.899441,429.922496 L975.658094,445.735988 C975.239296,447.297441 973.63275,448.224076 972.069748,447.805679 L968.116396,446.746851 C967.901472,447.446596 967.431916,448.046113 966.780741,448.421703 L952.588919,456.607368 C951.187592,457.415636 949.395723,456.935974 948.586667,455.536014 L940.393015,441.358025 C939.583959,439.958065 940.064089,438.167942 941.465415,437.359675 L955.657237,429.174009 C956.109763,428.912998 956.61394,428.780409 957.132122,428.781544 L957.172177,428.782981 L958.410481,424.17016 C958.82928,422.608707 960.435825,421.682071 961.998802,422.100461 Z M956.676441,430.631194 L956.606676,430.662871 L956.538675,430.699217 L942.346853,438.884883 C941.825908,439.185357 941.624589,439.826504 941.862064,440.364013 L941.919711,440.477446 L950.113363,454.655434 C950.414131,455.175872 951.055903,455.376995 951.593937,455.139751 L951.70748,455.08216 L965.899303,446.896495 C966.099713,446.780901 966.256655,446.612376 966.357167,446.413556 L966.410598,446.290809 L960.954868,444.82956 C961.183921,445.518697 960.905749,446.296663 960.251644,446.673942 C959.503478,447.105475 958.546803,446.849384 958.114849,446.101947 C957.763267,445.493584 957.867672,444.74722 958.326227,444.255594 L958.429872,444.154288 L956.240853,443.568474 C954.733697,443.165026 953.8174,441.658232 954.129346,440.1512 L954.169093,439.983807 L954.537562,438.60552 C954.041259,438.556856 953.591345,438.274645 953.335218,437.831454 C952.903265,437.084018 953.159605,436.128274 953.907771,435.696742 C954.30391,435.468254 954.76823,435.42905 955.183804,435.567119 L955.337131,435.62718 L956.676441,430.631194 Z M954.910938,447.949923 L954.98006,448.083837 C955.311032,448.807986 955.042541,449.678487 954.338385,450.084636 C953.590219,450.516168 952.633543,450.260078 952.20159,449.512641 C951.769636,448.765205 952.025976,447.809462 952.774142,447.377929 C953.522308,446.946396 954.478984,447.202487 954.910938,447.949923 Z M966.847,446.202 L967.783,446.453 L967.783,446.452 L966.847,446.202 Z M952.521122,443.814677 L952.590244,443.948591 C952.921216,444.67274 952.652726,445.543241 951.94857,445.949389 C951.200404,446.380922 950.243728,446.124831 949.811774,445.377395 C949.379821,444.629958 949.636161,443.674215 950.384327,443.242682 C951.132493,442.81115 952.089169,443.06724 952.521122,443.814677 Z M960.152814,424.505049 L960.11329,424.625981 L955.871943,440.439472 C955.716254,441.019945 956.027701,441.61552 956.576069,441.82784 L956.697119,441.867326 L972.52604,446.104538 C973.107078,446.260075 973.703234,445.948931 973.915761,445.401098 L973.955286,445.280166 L978.196632,429.466675 C978.352321,428.886203 978.040874,428.290628 977.492506,428.078308 L977.371457,428.038822 L961.542536,423.80161 C960.961497,423.646073 960.365341,423.957216 960.152814,424.505049 Z M959.193,444.15 L959.19,444.152 L960.275,444.443 L960.273,444.44 L959.193,444.15 Z M950.131307,439.67943 L950.200429,439.813344 C950.531401,440.537493 950.26291,441.407994 949.558754,441.814143 C948.810589,442.245675 947.853913,441.989585 947.421959,441.242148 C946.990005,440.494712 947.246346,439.538968 947.994512,439.107436 C948.742677,438.675903 949.699353,438.931994 950.131307,439.67943 Z M969.74803,437.872203 C970.5825,438.095581 971.077712,438.952477 970.854116,439.786134 C970.630521,440.619791 969.772788,441.11452 968.938318,440.891142 C968.103847,440.667765 967.608636,439.810869 967.832231,438.977212 C968.055827,438.143554 968.913559,437.648825 969.74803,437.872203 Z M963.152646,436.106698 C963.987116,436.330076 964.482328,437.186972 964.258733,438.020629 C964.035137,438.854286 963.177405,439.349015 962.342934,439.125637 C961.508464,438.90226 961.013252,438.045364 961.236848,437.211706 C961.460443,436.378049 962.318175,435.88332 963.152646,436.106698 Z M971.411595,430.92679 C972.246065,431.150168 972.741277,432.007064 972.517682,432.840721 C972.294086,433.674378 971.436354,434.169107 970.601883,433.945729 C969.767413,433.722351 969.272201,432.865455 969.495797,432.031798 C969.719392,431.198141 970.577125,430.703412 971.411595,430.92679 Z M964.816211,429.161285 C965.650682,429.384663 966.145894,430.241559 965.922298,431.075216 C965.698702,431.908873 964.84097,432.403602 964.0065,432.180224 C963.172029,431.956846 962.676817,431.09995 962.900413,430.266293 C963.124009,429.432636 963.981741,428.937907 964.816211,429.161285 Z" id="craps">

                  </path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="landing-page-h6 landing-page-content">Add first side</div>
      </q-card-section>
    </q-card>

    <q-card  class="landing-page-card" @click=" secondSide=true"  :class="savedData && validData?'landing-page-card-valid':'landing-page-card-invalid'">
      <q-card-section class="landing-page-card-section">
        <div class="landing-page-content image-holder">
          <svg width="800px" height="800px" viewBox="0 -2.5 40 40" xmlns="http://www.w3.org/2000/svg" >
            <title>craps</title>
            <desc>Created with Sketch.</desc>
            <g id="icons" stroke="none" stroke-width="1" fill-rule="evenodd">
              <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-990.000000, -542.000000)">
                <g id="square-filled" transform="translate(50.000000, 120.000000)">
                  <path d="M961.998802,422.100461 L977.827723,426.337674 C979.390699,426.756064 980.318239,428.361044 979.899441,429.922496 L975.658094,445.735988 C975.239296,447.297441 973.63275,448.224076 972.069748,447.805679 L968.116396,446.746851 C967.901472,447.446596 967.431916,448.046113 966.780741,448.421703 L952.588919,456.607368 C951.187592,457.415636 949.395723,456.935974 948.586667,455.536014 L940.393015,441.358025 C939.583959,439.958065 940.064089,438.167942 941.465415,437.359675 L955.657237,429.174009 C956.109763,428.912998 956.61394,428.780409 957.132122,428.781544 L957.172177,428.782981 L958.410481,424.17016 C958.82928,422.608707 960.435825,421.682071 961.998802,422.100461 Z M956.676441,430.631194 L956.606676,430.662871 L956.538675,430.699217 L942.346853,438.884883 C941.825908,439.185357 941.624589,439.826504 941.862064,440.364013 L941.919711,440.477446 L950.113363,454.655434 C950.414131,455.175872 951.055903,455.376995 951.593937,455.139751 L951.70748,455.08216 L965.899303,446.896495 C966.099713,446.780901 966.256655,446.612376 966.357167,446.413556 L966.410598,446.290809 L960.954868,444.82956 C961.183921,445.518697 960.905749,446.296663 960.251644,446.673942 C959.503478,447.105475 958.546803,446.849384 958.114849,446.101947 C957.763267,445.493584 957.867672,444.74722 958.326227,444.255594 L958.429872,444.154288 L956.240853,443.568474 C954.733697,443.165026 953.8174,441.658232 954.129346,440.1512 L954.169093,439.983807 L954.537562,438.60552 C954.041259,438.556856 953.591345,438.274645 953.335218,437.831454 C952.903265,437.084018 953.159605,436.128274 953.907771,435.696742 C954.30391,435.468254 954.76823,435.42905 955.183804,435.567119 L955.337131,435.62718 L956.676441,430.631194 Z M954.910938,447.949923 L954.98006,448.083837 C955.311032,448.807986 955.042541,449.678487 954.338385,450.084636 C953.590219,450.516168 952.633543,450.260078 952.20159,449.512641 C951.769636,448.765205 952.025976,447.809462 952.774142,447.377929 C953.522308,446.946396 954.478984,447.202487 954.910938,447.949923 Z M966.847,446.202 L967.783,446.453 L967.783,446.452 L966.847,446.202 Z M952.521122,443.814677 L952.590244,443.948591 C952.921216,444.67274 952.652726,445.543241 951.94857,445.949389 C951.200404,446.380922 950.243728,446.124831 949.811774,445.377395 C949.379821,444.629958 949.636161,443.674215 950.384327,443.242682 C951.132493,442.81115 952.089169,443.06724 952.521122,443.814677 Z M960.152814,424.505049 L960.11329,424.625981 L955.871943,440.439472 C955.716254,441.019945 956.027701,441.61552 956.576069,441.82784 L956.697119,441.867326 L972.52604,446.104538 C973.107078,446.260075 973.703234,445.948931 973.915761,445.401098 L973.955286,445.280166 L978.196632,429.466675 C978.352321,428.886203 978.040874,428.290628 977.492506,428.078308 L977.371457,428.038822 L961.542536,423.80161 C960.961497,423.646073 960.365341,423.957216 960.152814,424.505049 Z M959.193,444.15 L959.19,444.152 L960.275,444.443 L960.273,444.44 L959.193,444.15 Z M950.131307,439.67943 L950.200429,439.813344 C950.531401,440.537493 950.26291,441.407994 949.558754,441.814143 C948.810589,442.245675 947.853913,441.989585 947.421959,441.242148 C946.990005,440.494712 947.246346,439.538968 947.994512,439.107436 C948.742677,438.675903 949.699353,438.931994 950.131307,439.67943 Z M969.74803,437.872203 C970.5825,438.095581 971.077712,438.952477 970.854116,439.786134 C970.630521,440.619791 969.772788,441.11452 968.938318,440.891142 C968.103847,440.667765 967.608636,439.810869 967.832231,438.977212 C968.055827,438.143554 968.913559,437.648825 969.74803,437.872203 Z M963.152646,436.106698 C963.987116,436.330076 964.482328,437.186972 964.258733,438.020629 C964.035137,438.854286 963.177405,439.349015 962.342934,439.125637 C961.508464,438.90226 961.013252,438.045364 961.236848,437.211706 C961.460443,436.378049 962.318175,435.88332 963.152646,436.106698 Z M971.411595,430.92679 C972.246065,431.150168 972.741277,432.007064 972.517682,432.840721 C972.294086,433.674378 971.436354,434.169107 970.601883,433.945729 C969.767413,433.722351 969.272201,432.865455 969.495797,432.031798 C969.719392,431.198141 970.577125,430.703412 971.411595,430.92679 Z M964.816211,429.161285 C965.650682,429.384663 966.145894,430.241559 965.922298,431.075216 C965.698702,431.908873 964.84097,432.403602 964.0065,432.180224 C963.172029,431.956846 962.676817,431.09995 962.900413,430.266293 C963.124009,429.432636 963.981741,428.937907 964.816211,429.161285 Z" id="craps">

                  </path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="landing-page-h6 landing-page-content">Add second side</div>
      </q-card-section>
    </q-card>
  </q-page>

  <q-dialog v-model="alert" class="dialog-game-data">
  <q-card class="dialog-game-data">
    <q-card-section >
      <div><h6 class="game-data-title">Define game data</h6></div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="game-data-wrapper">
        <GameDataComponent ref="gameDataComponentRef" :gameData="gameData"/>
      </div>

    </q-card-section>

    <q-card-actions align="center">
      <q-btn flat label="Save game data" color="primary" @click="saveData" v-close-popup />
    </q-card-actions>
  </q-card>
  </q-dialog>

  <q-dialog v-model="firstSide" class="dialog-game-data">
    <q-card class="dialog-game-data">
      <q-card-section >
        <div><h6 class="game-data-title">Define first game side</h6></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="game-data-wrapper">
          <GameSideComponent v-model="firstSideData" :game-data="firstSideData">

          </GameSideComponent>
        </div>

      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="Save game data" color="primary" @click="saveFirstSide" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="secondSide" class="dialog-game-data">
    <q-card class="dialog-game-data">
      <q-card-section >
        <div><h6 class="game-data-title">Define second game side</h6></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="game-data-wrapper">
          <GameSideComponent v-model="secondSideData" :game-data="secondSideData">

          </GameSideComponent>
        </div>

      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="Save game data" color="primary" @click="saveSecondSide" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GameDataComponent from 'components/GameDataComponent.vue';
import {
  Allegiance,
  ArmyData,
  ArmyDataRequest,
  Game,
  GameData,
  GameRequest,
  GameSide, PlayerData,
  PlayerDataRequest
} from 'components/models';
import GameSideComponent from 'components/GameSideComponent.vue';


const alert=ref(false)
const firstSide=ref(false)
const secondSide=ref(false)
let savedData=ref(false)
let validData=ref(false)
const firstSideData = ref<GameSide>({
  'allegiance': Allegiance.LOYALIST,
  'playerDataList': []
})
const secondSideData = ref<GameSide>({
  'allegiance': Allegiance.LOYALIST,
  'playerDataList': []
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let gameData = ref<GameData>({
  ranking: false,
  gamePointSize: 0,
  gameTurnLength: 0,
  gameTime: 0,
  gameStartTime:  undefined,
  gameMission: {
    label:'',
    value:''
  },
  gameDeployment: {
    label:'',
    value:''
  },
  locationSaveDto:  undefined
})

const game = ref<Game>({
  firstSide: firstSideData.value,
  secondSide: secondSideData.value,
  gameData: gameData.value
})

const gameRequest = ref<GameRequest>({
  firstSide: null,
  secondSide: null,
  ranking: false,
  gamePointSize: 0,
  gameTurnLength: 0,
  gameTime: 0,
  gameStartTime:  undefined,
  gameMission: '',
  gameDeployment: '',
  locationSaveDto:  undefined
})

const gameDataComponentRef = ref<InstanceType<typeof GameDataComponent> | null>(null)
function saveData(){
  savedData.value = true;
  validData.value = true;
  if( gameDataComponentRef.value !== undefined && gameDataComponentRef.value !== null){
    gameData.value = gameDataComponentRef.value.saveGameDataObject().value
  }
}

function saveFirstSide(){
  savedData.value = true;
  validData.value = true;
  console.log(firstSideData )
}

function saveSecondSide(){
  savedData.value = true;
  validData.value = true;
  console.log(secondSideData )
}

function transformArmyData(armyData: ArmyData): ArmyDataRequest {
  return {
    armyType: armyData.armyType.value,  // Extracting 'value' from armyType
    armyName: armyData.armyName,
    pointValue: armyData.pointValue,
  };
}

function transformPlayerData(playerData: PlayerData): PlayerDataRequest {
  return {
    playerId: playerData.playerId,
    primaryArmy: playerData.primaryArmy ? transformArmyData(playerData.primaryArmy) : undefined,
    allyArmyList: playerData.allyArmyList.map(transformArmyData), // Transform each ally army
  };
}

function mapPlayerDataToRequest(playerDataArray: PlayerData[]): PlayerDataRequest[] {
  return playerDataArray.map(transformPlayerData);
}

import { useQuasar } from 'quasar'
const $q = useQuasar()

function validateLocationSaveDto(): boolean{
  console.log(gameRequest.value.locationSaveDto)
  if(gameRequest.value.locationSaveDto === undefined){
    $q.notify({
      message: 'You must provide game location info!',
      icon: 'report_problem',
      color: 'negative'
    })
    return false;
  }
  console.log(gameRequest.value.locationSaveDto.name==='')
  if(gameRequest.value.locationSaveDto.name===''){
    $q.notify({
      message: 'You must fill location name',
      icon: 'report_problem',
      color: 'negative'
    })
    return false;
  }
  if(gameRequest.value.locationSaveDto.isPrivate &&
    (
         gameRequest.value.locationSaveDto.country === ''
      || gameRequest.value.locationSaveDto.city === ''
      || gameRequest.value.locationSaveDto.street === ''
      || gameRequest.value.locationSaveDto.houseNumber === ''
    )){
    $q.notify({
      message: 'You must fill all location data fields',
      icon: 'report_problem',
      color: 'negative'
    })
    return false;
  }
  return true;

}


async function saveGame(): Promise<unknown> {

  console.log(gameData)
  gameRequest.value.ranking= gameData.value.ranking;
  gameRequest.value.gamePointSize=gameData.value.gamePointSize;
  gameRequest.value.gameTurnLength=gameData.value.gameTurnLength;
  gameRequest.value.gameTime=gameData.value.gameTime;
  gameRequest.value.gameStartTime=gameData.value.gameStartTime;
  gameRequest.value.gameMission=gameData.value.gameMission.value;
  gameRequest.value.gameDeployment=gameData.value.gameDeployment.value;
  gameRequest.value.locationSaveDto=gameData.value.locationSaveDto;
  gameRequest.value.firstSide = {
    allegiance: game.value.firstSide.allegiance,
    playerDataList: mapPlayerDataToRequest(game.value.firstSide.playerDataList)
  }
  if(game.value.secondSide?.playerDataList.length!==undefined && game.value.secondSide?.playerDataList.length<1){
    gameRequest.value.secondSide = null
  }
  console.log(gameRequest)
  validData.value = validateLocationSaveDto()
  if(!validData.value){
    console.log(validData.value)
    throw new Error('Validation error');
  }

  try {
    const response = await fetch('http://localhost:8083/game/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameRequest.value),
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {

      $q.notify({
        message: response.status.toString(),
        icon: 'report_problem',
        color: 'negative'
      })
      throw new Error(`HTTP error! status: ${response.status}`);
    }


    // Parse the response body as JSON
    return await response.json();

  } catch (error: unknown) {
    console.error('Error saving the game:', error);

    throw error; // Re-throw the error to be handled by the caller
  }

}

</script>

<style scoped>
.game-data-title{
  display: flex;
  align-items: center;
  align-self: center;
  align-content: center;
  justify-content: center;
}
.dialog-game-data{
  width:50vw;
  max-width: none !important;
  border-radius: 2vw;
}

.landing-page-card{
  max-width: 30vw;
  border-radius: 2vw;
}

.landing-page-card-valid {
  background-color: rgba(0,255,0, 0.3) !important;;
}

.landing-page-card-invalid {
  background-color: rgba(255,0,0, 0.3) !important;
}

.landing-page-card-valid :hover {
  background-color: rgba(0,255,0, 0.5) !important;;
}

.landing-page-card-invalid :hover {
  background-color: rgba(255,0,0, 0.5) !important;
}

.landing-page-card-invalid :hover  *{
  background: none !important;
}

.landing-page-card-valid :hover  *{
  background: none !important;
}
</style>
