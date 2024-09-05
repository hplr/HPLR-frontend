<template>
  <div class="hplr-page game-creator-wrapper">
    <div class="save-game-wrapper">
      <q-btn class="save-game-btn" flat label="Save game" color="primary" @click="saveGame" />
    </div>
    <q-page class="row items-center justify-evenly " padding>
      <q-card class="landing-page-card" @click=" alert=true"
              :class="savedData && validData?'landing-page-card-valid':'landing-page-card-invalid'">
        <q-card-section class="landing-page-card-section">
          <div class="landing-page-content image-holder">
            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 487.168 487.168" xml:space="preserve">
              <g>
	              <path d="M28.424,251.013c0.009,0.086,0.026,0.17,0.037,0.256c0.029,0.239,0.06,0.477,0.106,0.713
		            c0.015,0.073,0.037,0.145,0.053,0.218c0.054,0.246,0.111,0.491,0.184,0.734c0.016,0.052,0.037,0.102,0.054,0.154
		            c0.083,0.259,0.171,0.516,0.275,0.769c0.015,0.035,0.033,0.069,0.048,0.104c0.112,0.263,0.232,0.524,0.368,0.779
		            c0.021,0.04,0.047,0.077,0.069,0.116c0.134,0.244,0.274,0.485,0.431,0.72c0.064,0.096,0.139,0.187,0.207,0.281
		            c0.122,0.17,0.24,0.342,0.375,0.506c0.211,0.259,0.435,0.508,0.673,0.746l48.49,48.489c1.953,1.952,4.512,2.929,7.071,2.929
		            s5.119-0.977,7.071-2.929c3.905-3.905,3.905-10.237,0-14.143l-41.419-41.419l38.097-38.097c1.875-1.876,2.929-4.419,2.929-7.071
		            s-1.054-5.195-2.929-7.071L52.518,159.7L188.077,24.143l79.249,79.249c3.906,3.904,10.238,3.905,14.143,0
		            c3.905-3.905,3.905-10.237,0-14.143l-86.32-86.32C193.272,1.054,190.729,0,188.077,0s-5.196,1.054-7.071,2.929l-149.701,149.7
		            c-0.236,0.237-0.459,0.484-0.669,0.74c-0.175,0.213-0.333,0.435-0.487,0.658c-0.03,0.044-0.065,0.084-0.095,0.129
		            c-0.175,0.261-0.333,0.53-0.481,0.804c-0.006,0.011-0.014,0.021-0.019,0.033c-0.147,0.275-0.278,0.555-0.397,0.84
		            c-0.006,0.015-0.014,0.029-0.02,0.043c-0.11,0.268-0.205,0.54-0.292,0.814c-0.012,0.037-0.027,0.073-0.038,0.11
		            c-0.077,0.254-0.137,0.512-0.193,0.771c-0.013,0.061-0.032,0.121-0.044,0.182c-0.049,0.247-0.081,0.495-0.111,0.744
		            c-0.009,0.076-0.025,0.15-0.033,0.226c-0.032,0.325-0.048,0.651-0.048,0.977v90.337c0,0.009,0.001,0.017,0.001,0.025
		            C28.378,250.38,28.393,250.697,28.424,251.013z M48.376,225.894v-42.052l21.026,21.026L48.376,225.894z" />
                <path d="M308.373,219.235c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l99.514-99.514
	              	c19.677-19.679,19.677-51.696,0-71.375c-9.521-9.52-22.194-14.763-35.688-14.763s-26.167,5.243-35.688,14.763l-99.514,99.514
	              	c-3.905,3.905-3.905,10.237,0,14.143l0.266,0.266L67.414,346.262c-28.386,28.386-40.506,57.113-32.909,75.466l-14.784,14.785
	              	c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929s5.119-0.977,7.071-2.929l14.806-14.807
	              	c3.241,1.342,7.234,2.281,12.095,2.28c5.049,0,11.024-1.007,18.038-3.608c14.304-5.307,29.972-16.22,45.312-31.559l183.993-183.993
	              	L308.373,219.235z M364.797,62.489c5.742-5.742,13.394-8.905,21.545-8.905s15.803,3.163,21.545,8.905
	              	c11.88,11.88,11.88,31.21,0,43.09l-92.442,92.443l-0.247-0.247c-0.006-0.007-0.012-0.014-0.018-0.02
	              	c-0.006-0.006-0.014-0.012-0.02-0.018l-14.188-14.189l95.244-95.244c3.905-3.905,3.905-10.237,0-14.143
	              	c-3.906-3.904-10.236-3.904-14.143,0l-95.244,95.244l-14.198-14.198c-0.003-0.003-0.006-0.007-0.009-0.01s-0.007-0.006-0.01-0.009
	              	l-0.256-0.256L364.797,62.489z M71.846,415.77c-8.152,3.023-14.709,3.138-17.543,0.303c-5.414-5.414-0.816-24.628,20.381-48.398
	              	L102.7,395.69C91.932,405.286,81.196,412.301,71.846,415.77z M117.043,381.748l-28.415-28.415l176.921-176.921l7.136,7.136
	              	l-6.556,6.556c-3.905,3.905-3.905,10.237,0,14.143c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l6.556-6.556
	              	l7.136,7.136L117.043,381.748z" />
                <path d="M467.447,275.229l-86.32-86.32c-3.906-3.904-10.236-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l79.249,79.249
          	    	L265.508,463.025l-86.587-86.587c-3.905-3.904-10.237-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l93.658,93.658
          	    	c1.953,1.952,4.512,2.929,7.071,2.929s5.118-0.977,7.071-2.929l194.868-194.868C471.352,285.466,471.352,279.134,467.447,275.229z"
                />
            </g>
          </svg>
          </div>
          <div class="landing-page-h6 landing-page-content">Fill game data</div>
        </q-card-section>
      </q-card>

      <q-card class="landing-page-card" @click=" firstSide=true"
              :class="savedFirstSide && validFirstSide?'landing-page-card-valid':'landing-page-card-invalid'">
        <q-card-section class="landing-page-card-section">
          <div class="landing-page-content image-holder">
            <svg width="800px" height="800px" viewBox="0 -2.5 40 40" xmlns="http://www.w3.org/2000/svg">
              <title>craps</title>
              <desc>Created with Sketch.</desc>
              <g id="icons" stroke="none" stroke-width="1" fill-rule="evenodd">
                <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-990.000000, -542.000000)">
                  <g id="square-filled" transform="translate(50.000000, 120.000000)">
                    <path
                      d="M961.998802,422.100461 L977.827723,426.337674 C979.390699,426.756064 980.318239,428.361044 979.899441,429.922496 L975.658094,445.735988 C975.239296,447.297441 973.63275,448.224076 972.069748,447.805679 L968.116396,446.746851 C967.901472,447.446596 967.431916,448.046113 966.780741,448.421703 L952.588919,456.607368 C951.187592,457.415636 949.395723,456.935974 948.586667,455.536014 L940.393015,441.358025 C939.583959,439.958065 940.064089,438.167942 941.465415,437.359675 L955.657237,429.174009 C956.109763,428.912998 956.61394,428.780409 957.132122,428.781544 L957.172177,428.782981 L958.410481,424.17016 C958.82928,422.608707 960.435825,421.682071 961.998802,422.100461 Z M956.676441,430.631194 L956.606676,430.662871 L956.538675,430.699217 L942.346853,438.884883 C941.825908,439.185357 941.624589,439.826504 941.862064,440.364013 L941.919711,440.477446 L950.113363,454.655434 C950.414131,455.175872 951.055903,455.376995 951.593937,455.139751 L951.70748,455.08216 L965.899303,446.896495 C966.099713,446.780901 966.256655,446.612376 966.357167,446.413556 L966.410598,446.290809 L960.954868,444.82956 C961.183921,445.518697 960.905749,446.296663 960.251644,446.673942 C959.503478,447.105475 958.546803,446.849384 958.114849,446.101947 C957.763267,445.493584 957.867672,444.74722 958.326227,444.255594 L958.429872,444.154288 L956.240853,443.568474 C954.733697,443.165026 953.8174,441.658232 954.129346,440.1512 L954.169093,439.983807 L954.537562,438.60552 C954.041259,438.556856 953.591345,438.274645 953.335218,437.831454 C952.903265,437.084018 953.159605,436.128274 953.907771,435.696742 C954.30391,435.468254 954.76823,435.42905 955.183804,435.567119 L955.337131,435.62718 L956.676441,430.631194 Z M954.910938,447.949923 L954.98006,448.083837 C955.311032,448.807986 955.042541,449.678487 954.338385,450.084636 C953.590219,450.516168 952.633543,450.260078 952.20159,449.512641 C951.769636,448.765205 952.025976,447.809462 952.774142,447.377929 C953.522308,446.946396 954.478984,447.202487 954.910938,447.949923 Z M966.847,446.202 L967.783,446.453 L967.783,446.452 L966.847,446.202 Z M952.521122,443.814677 L952.590244,443.948591 C952.921216,444.67274 952.652726,445.543241 951.94857,445.949389 C951.200404,446.380922 950.243728,446.124831 949.811774,445.377395 C949.379821,444.629958 949.636161,443.674215 950.384327,443.242682 C951.132493,442.81115 952.089169,443.06724 952.521122,443.814677 Z M960.152814,424.505049 L960.11329,424.625981 L955.871943,440.439472 C955.716254,441.019945 956.027701,441.61552 956.576069,441.82784 L956.697119,441.867326 L972.52604,446.104538 C973.107078,446.260075 973.703234,445.948931 973.915761,445.401098 L973.955286,445.280166 L978.196632,429.466675 C978.352321,428.886203 978.040874,428.290628 977.492506,428.078308 L977.371457,428.038822 L961.542536,423.80161 C960.961497,423.646073 960.365341,423.957216 960.152814,424.505049 Z M959.193,444.15 L959.19,444.152 L960.275,444.443 L960.273,444.44 L959.193,444.15 Z M950.131307,439.67943 L950.200429,439.813344 C950.531401,440.537493 950.26291,441.407994 949.558754,441.814143 C948.810589,442.245675 947.853913,441.989585 947.421959,441.242148 C946.990005,440.494712 947.246346,439.538968 947.994512,439.107436 C948.742677,438.675903 949.699353,438.931994 950.131307,439.67943 Z M969.74803,437.872203 C970.5825,438.095581 971.077712,438.952477 970.854116,439.786134 C970.630521,440.619791 969.772788,441.11452 968.938318,440.891142 C968.103847,440.667765 967.608636,439.810869 967.832231,438.977212 C968.055827,438.143554 968.913559,437.648825 969.74803,437.872203 Z M963.152646,436.106698 C963.987116,436.330076 964.482328,437.186972 964.258733,438.020629 C964.035137,438.854286 963.177405,439.349015 962.342934,439.125637 C961.508464,438.90226 961.013252,438.045364 961.236848,437.211706 C961.460443,436.378049 962.318175,435.88332 963.152646,436.106698 Z M971.411595,430.92679 C972.246065,431.150168 972.741277,432.007064 972.517682,432.840721 C972.294086,433.674378 971.436354,434.169107 970.601883,433.945729 C969.767413,433.722351 969.272201,432.865455 969.495797,432.031798 C969.719392,431.198141 970.577125,430.703412 971.411595,430.92679 Z M964.816211,429.161285 C965.650682,429.384663 966.145894,430.241559 965.922298,431.075216 C965.698702,431.908873 964.84097,432.403602 964.0065,432.180224 C963.172029,431.956846 962.676817,431.09995 962.900413,430.266293 C963.124009,429.432636 963.981741,428.937907 964.816211,429.161285 Z"
                      id="craps">

                    </path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="landing-page-h6 landing-page-content">Add first side</div>
        </q-card-section>
      </q-card>

      <q-card class="landing-page-card" @click=" secondSide=true"
              :class="savedSecondSide && validSecondSide?'landing-page-card-valid':'landing-page-card-invalid'">
        <q-card-section class="landing-page-card-section">
          <div class="landing-page-content image-holder">
            <svg width="800px" height="800px" viewBox="0 -2.5 40 40" xmlns="http://www.w3.org/2000/svg">
              <title>craps</title>
              <desc>Created with Sketch.</desc>
              <g id="icons" stroke="none" stroke-width="1" fill-rule="evenodd">
                <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-990.000000, -542.000000)">
                  <g id="square-filled" transform="translate(50.000000, 120.000000)">
                    <path
                      d="M961.998802,422.100461 L977.827723,426.337674 C979.390699,426.756064 980.318239,428.361044 979.899441,429.922496 L975.658094,445.735988 C975.239296,447.297441 973.63275,448.224076 972.069748,447.805679 L968.116396,446.746851 C967.901472,447.446596 967.431916,448.046113 966.780741,448.421703 L952.588919,456.607368 C951.187592,457.415636 949.395723,456.935974 948.586667,455.536014 L940.393015,441.358025 C939.583959,439.958065 940.064089,438.167942 941.465415,437.359675 L955.657237,429.174009 C956.109763,428.912998 956.61394,428.780409 957.132122,428.781544 L957.172177,428.782981 L958.410481,424.17016 C958.82928,422.608707 960.435825,421.682071 961.998802,422.100461 Z M956.676441,430.631194 L956.606676,430.662871 L956.538675,430.699217 L942.346853,438.884883 C941.825908,439.185357 941.624589,439.826504 941.862064,440.364013 L941.919711,440.477446 L950.113363,454.655434 C950.414131,455.175872 951.055903,455.376995 951.593937,455.139751 L951.70748,455.08216 L965.899303,446.896495 C966.099713,446.780901 966.256655,446.612376 966.357167,446.413556 L966.410598,446.290809 L960.954868,444.82956 C961.183921,445.518697 960.905749,446.296663 960.251644,446.673942 C959.503478,447.105475 958.546803,446.849384 958.114849,446.101947 C957.763267,445.493584 957.867672,444.74722 958.326227,444.255594 L958.429872,444.154288 L956.240853,443.568474 C954.733697,443.165026 953.8174,441.658232 954.129346,440.1512 L954.169093,439.983807 L954.537562,438.60552 C954.041259,438.556856 953.591345,438.274645 953.335218,437.831454 C952.903265,437.084018 953.159605,436.128274 953.907771,435.696742 C954.30391,435.468254 954.76823,435.42905 955.183804,435.567119 L955.337131,435.62718 L956.676441,430.631194 Z M954.910938,447.949923 L954.98006,448.083837 C955.311032,448.807986 955.042541,449.678487 954.338385,450.084636 C953.590219,450.516168 952.633543,450.260078 952.20159,449.512641 C951.769636,448.765205 952.025976,447.809462 952.774142,447.377929 C953.522308,446.946396 954.478984,447.202487 954.910938,447.949923 Z M966.847,446.202 L967.783,446.453 L967.783,446.452 L966.847,446.202 Z M952.521122,443.814677 L952.590244,443.948591 C952.921216,444.67274 952.652726,445.543241 951.94857,445.949389 C951.200404,446.380922 950.243728,446.124831 949.811774,445.377395 C949.379821,444.629958 949.636161,443.674215 950.384327,443.242682 C951.132493,442.81115 952.089169,443.06724 952.521122,443.814677 Z M960.152814,424.505049 L960.11329,424.625981 L955.871943,440.439472 C955.716254,441.019945 956.027701,441.61552 956.576069,441.82784 L956.697119,441.867326 L972.52604,446.104538 C973.107078,446.260075 973.703234,445.948931 973.915761,445.401098 L973.955286,445.280166 L978.196632,429.466675 C978.352321,428.886203 978.040874,428.290628 977.492506,428.078308 L977.371457,428.038822 L961.542536,423.80161 C960.961497,423.646073 960.365341,423.957216 960.152814,424.505049 Z M959.193,444.15 L959.19,444.152 L960.275,444.443 L960.273,444.44 L959.193,444.15 Z M950.131307,439.67943 L950.200429,439.813344 C950.531401,440.537493 950.26291,441.407994 949.558754,441.814143 C948.810589,442.245675 947.853913,441.989585 947.421959,441.242148 C946.990005,440.494712 947.246346,439.538968 947.994512,439.107436 C948.742677,438.675903 949.699353,438.931994 950.131307,439.67943 Z M969.74803,437.872203 C970.5825,438.095581 971.077712,438.952477 970.854116,439.786134 C970.630521,440.619791 969.772788,441.11452 968.938318,440.891142 C968.103847,440.667765 967.608636,439.810869 967.832231,438.977212 C968.055827,438.143554 968.913559,437.648825 969.74803,437.872203 Z M963.152646,436.106698 C963.987116,436.330076 964.482328,437.186972 964.258733,438.020629 C964.035137,438.854286 963.177405,439.349015 962.342934,439.125637 C961.508464,438.90226 961.013252,438.045364 961.236848,437.211706 C961.460443,436.378049 962.318175,435.88332 963.152646,436.106698 Z M971.411595,430.92679 C972.246065,431.150168 972.741277,432.007064 972.517682,432.840721 C972.294086,433.674378 971.436354,434.169107 970.601883,433.945729 C969.767413,433.722351 969.272201,432.865455 969.495797,432.031798 C969.719392,431.198141 970.577125,430.703412 971.411595,430.92679 Z M964.816211,429.161285 C965.650682,429.384663 966.145894,430.241559 965.922298,431.075216 C965.698702,431.908873 964.84097,432.403602 964.0065,432.180224 C963.172029,431.956846 962.676817,431.09995 962.900413,430.266293 C963.124009,429.432636 963.981741,428.937907 964.816211,429.161285 Z"
                      id="craps">

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
  </div>


  <q-dialog v-model="alert" class="dialog-game-data">
    <q-card class="dialog-game-data">
      <q-card-section>
        <div><h6 class="game-data-title">Define game data</h6></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="game-data-wrapper">
          <GameDataComponent ref="gameDataComponentRef" :gameData="gameData" />
        </div>

      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="Save game data" color="primary" @click="saveData" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="firstSide" class="dialog-game-data">
    <q-card class="dialog-game-data">
      <q-card-section>
        <div><h6 class="game-data-title">Define first game side</h6></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="game-data-wrapper">
          <GameSideComponent v-model="firstSideData" :game-data="firstSideData" :side-name="'firstSide'">

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
      <q-card-section>
        <div><h6 class="game-data-title">Define second game side</h6></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="game-data-wrapper">
          <GameSideComponent v-model="secondSideData" :game-data="secondSideData" :side-name="'secondSide'">

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
  GameData, GameLocation,
  GameRequest,
  GameSide, JWTToken, PlayerData,
  PlayerDataRequest
} from 'components/models';
import GameSideComponent from 'components/GameSideComponent.vue';
import { useQuasar } from 'quasar';
import { useCookies } from 'vue3-cookies';
import * as JWT from 'jwt-decode';
import { useRouter } from 'vue-router';

const alert = ref(false);
const firstSide = ref(false);
const secondSide = ref(false);
let savedData = ref(false);
let validData = ref(false);
let savedFirstSide = ref(false);
let validFirstSide = ref(false);
let savedSecondSide = ref(false);
let validSecondSide = ref(false);

const firstSideData = ref<GameSide>({
  'allegiance': Allegiance.LOYALIST,
  'playerDataList': []
});
const secondSideData = ref<GameSide>({
  'allegiance': Allegiance.LOYALIST,
  'playerDataList': []
});


const cookies = useCookies();
const $q = useQuasar();
const token: JWTToken | undefined = cookies.cookies.get('token') ? JWT.jwtDecode(cookies.cookies.get('token')) : undefined;
const router = useRouter();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let gameData = ref<GameData>({
  ranking: false,
  gamePointSize: 0,
  gameTurnLength: 0,
  gameTime: 0,
  gameStartTime: undefined,
  gameMission: {
    label: '',
    value: ''
  },
  gameDeployment: {
    label: '',
    value: ''
  },
  locationSaveDto: undefined
});

const game = ref<Game>({
  firstSide: firstSideData.value,
  secondSide: secondSideData.value,
  gameData: gameData.value
});

const gameRequest = ref<GameRequest>({
  firstSide: null,
  secondSide: null,
  ranking: false,
  gamePointSize: 0,
  gameTurnLength: 0,
  gameTime: 0,
  gameStartTime: undefined,
  gameMission: '',
  gameDeployment: '',
  locationSaveDto: undefined
});

const gameDataComponentRef = ref<InstanceType<typeof GameDataComponent> | null>(null);

function validateLocationSaveDto(locationSaveDto: GameLocation | undefined): boolean {
  console.log(locationSaveDto);
  if (locationSaveDto === undefined) {
    $q.notify({
      message: 'You must provide game location info!',
      icon: 'report_problem',
      color: 'negative'
    });
    return false;
  }
  console.log(locationSaveDto.name === '');
  if (locationSaveDto.name === '') {
    $q.notify({
      message: 'You must fill location name',
      icon: 'report_problem',
      color: 'negative'
    });
    return false;
  }
  if (locationSaveDto.isPrivate &&
    (
      locationSaveDto.country === ''
      || locationSaveDto.city === ''
      || locationSaveDto.street === ''
      || locationSaveDto.houseNumber === ''
    )) {
    $q.notify({
      message: 'You must fill all location data fields',
      icon: 'report_problem',
      color: 'negative'
    });
    return false;
  }
  return true;

}

function saveData() {
  if (gameDataComponentRef.value !== undefined && gameDataComponentRef.value !== null) {
    gameData.value = gameDataComponentRef.value.saveGameDataObject().value;
  }
  savedData.value = true;
  validData.value = validateLocationSaveDto(gameData.value.locationSaveDto);
}

function saveFirstSide() {
  savedFirstSide.value = true;
  validFirstSide.value = true;
  console.log(firstSideData);
}

function saveSecondSide() {
  savedSecondSide.value = true;
  validSecondSide.value = true;
  console.log(secondSideData);
}

function transformArmyData(armyData: ArmyData): ArmyDataRequest {
  return {
    armyType: armyData.armyType.value,  // Extracting 'value' from armyType
    armyName: armyData.armyName,
    pointValue: armyData.pointValue
  };
}

function transformPlayerData(playerData: PlayerData): PlayerDataRequest {
  return {
    playerId: playerData.playerId,
    primaryArmy: playerData.primaryArmy ? transformArmyData(playerData.primaryArmy) : undefined,
    allyArmyList: playerData.allyArmyList.map(transformArmyData) // Transform each ally army
  };
}

function mapPlayerDataToRequest(playerDataArray: PlayerData[]): PlayerDataRequest[] {
  return playerDataArray.map(transformPlayerData);
}




async function saveGame(): Promise<unknown> {

  console.log(gameData);
  gameRequest.value.ranking = gameData.value.ranking;
  gameRequest.value.gamePointSize = gameData.value.gamePointSize;
  gameRequest.value.gameTurnLength = gameData.value.gameTurnLength;
  gameRequest.value.gameTime = gameData.value.gameTime;
  gameRequest.value.gameStartTime = gameData.value.gameStartTime;
  gameRequest.value.gameMission = gameData.value.gameMission.value;
  gameRequest.value.gameDeployment = gameData.value.gameDeployment.value;
  gameRequest.value.locationSaveDto = gameData.value.locationSaveDto;
  gameRequest.value.firstSide = {
    allegiance: game.value.firstSide.allegiance,
    playerDataList: mapPlayerDataToRequest(game.value.firstSide.playerDataList)
  };
  if (game.value.secondSide?.playerDataList.length !== undefined && game.value.secondSide?.playerDataList.length < 1) {
    gameRequest.value.secondSide = null;
  }
  else{
    gameRequest.value.secondSide = {
      allegiance:game.value.secondSide.allegiance,
      playerDataList: mapPlayerDataToRequest(game.value.secondSide.playerDataList)
    }
  }
  console.log(gameRequest);
  validData.value = validateLocationSaveDto(gameRequest.value.locationSaveDto);
  if (!validData.value) {
    console.log(validData.value);
    throw new Error('Validation error');
  }

  try {
    const response = await fetch('http://localhost:8083/game/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gameRequest.value)
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {

      $q.notify({
        message: response.status.toString(),
        icon: 'report_problem',
        color: 'negative'
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }


    // Parse the response body as JSON
    return await response.json();

  } catch (error: unknown) {
    console.error('Error saving the game:', error);

    throw error; // Re-throw the error to be handled by the caller
  }

}

function checkIfPlayerIsLogged():void{
  if(token===undefined){
    router.push('/game')
  }
}

checkIfPlayerIsLogged()
</script>

<style scoped>
.game-data-title {
  display: flex;
  align-items: center;
  align-self: center;
  align-content: center;
  justify-content: center;
}

.dialog-game-data {
  width: 50vw;
  max-width: none !important;
  border-radius: 2vw;
}

.landing-page-card {
  max-width: 30vw;
  border-radius: 2vw;
}

.landing-page-card-valid {
  background-color: rgba(0, 255, 0, 0.3) !important;;
}

.landing-page-card-invalid {
  background-color: rgba(255, 0, 0, 0.3) !important;
}

.landing-page-card-valid :hover {
  background-color: rgba(0, 255, 0, 0.5) !important;;
}

.landing-page-card-invalid :hover {
  background-color: rgba(255, 0, 0, 0.5) !important;
}

.landing-page-card-invalid :hover * {
  background: none !important;
}

.landing-page-card-valid :hover * {
  background: none !important;
}

.save-game-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2vw;
}

.save-game-btn {
  width: 10vw;
  height: 1vw;
  background-color: #ffffff;
}

.game-creator-wrapper{
  background-image: url("src/assets/bg-inage-creator.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
