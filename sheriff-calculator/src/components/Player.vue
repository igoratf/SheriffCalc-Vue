<template>
  <div class="player app-component">
    <v-card hover>
      <v-card-title primary-title class="title" :style="{backgroundColor: color}">
        <div>
          <h3 class="headline mb-0">{{ player.name }}</h3>
          <div>{{ subtitle }}</div>
        </div>
      </v-card-title>

      <v-card-text>
        <v-layout row wrap>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Apple: {{ playerInfo.apple }}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Cheese: {{ playerInfo.cheese }}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Bread: {{ playerInfo.bread }}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Chicken: {{playerInfo.chicken}}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Contraband: {{playerInfo.contrabandScore}}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Coins: {{playerInfo.coin}}</p>
          </v-flex>
        </v-layout>
      </v-card-text>

      <div class="footer" v-if="player.kings || player.queens">
        <v-divider></v-divider>
        <v-card-text v-for="(item, index) in player.kings" :key="index">
          <p style="color: orange;">
            <strong>
              {{ item }} king!
              <span style="float: right">+ {{ kingEnum[item] }}</span>
            </strong>
          </p>
        </v-card-text>
        <v-card-text v-for="(item, index) in player.queens" :key="index">
        <p style="color: silver;">
            <strong>
              {{ item }} queen!
              <span style="float: right">+ {{ queenEnum[item] }}</span>
            </strong>
          </p>
        </v-card-text>
      </div>

      <v-dialog v-model="dialog" max-width="300">
        <template v-slot:activator="{ on }">
          <v-card-actions>
            <v-btn flat color="error" @click="dialog=true">Delete</v-btn>
            <!-- <v-btn flat color="orange">Explore</v-btn> -->
            <v-spacer></v-spacer>
          <div class="player-score" v-if="player.score >= 0">Score: {{playerInfo.score}}</div>
          </v-card-actions>
        </template>

        <v-card class="app-component" style="font-size: 1.25em">
          <v-card-title   class="headline" :style="{color:color}"><strong>Delete player</strong></v-card-title>
          <v-card-text :style="{color:color}">Are you sure you want to delete this player? This action can't be undone.</v-card-text>
          <v-card-actions>
            <v-btn color="green darken-1" flat @click="deleteNewPlayer(player.id)">Yes</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="error" flat @click="dialog = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      subtitle: '',
      kingEnum: {
        'apple': 20,
        'bread': 15,
        'cheese': 15,
        'chicken': 10
      },
      queenEnum: {
        'apple': 10,
        'bread': 10,
        'cheese': 10,
        'chicken': 5
      }
    };
  },
  computed: {
    playerInfo: function() {
      return this.player;
    },
    playerScore: function() {
      return this.player.score;
  }
  },
  props: ["color", "player"],  
  methods: {
    ...mapActions(["deletePlayer"]),
    deleteNewPlayer(id) {
      this.deletePlayer(id);
      this.dialog = false;
    }
  },
}
</script>


<style scoped>
.v-card__text {
  padding-bottom: 2px;
  padding-top: 8px;
}

.v-card__text > p {
  margin-bottom: 4px;
  font-size: 1.2em;
}

.player {
  margin-top: 10%;
  max-width: 350px;
}

.player-score {
  font-weight: bold;
  color: green;
  margin-right: 8px;
  font-size: 1.2em;
}

.headline {
  font-family: 'Kaushan Script', cursive!important;
}

.title {
  color: white;
}
</style>

