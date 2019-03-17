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
            <p>Apple: {{ player.apple }}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Cheese: {{ player.cheese }}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Bread: {{ player.bread }}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Chicken: {{player.chicken}}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Contraband: {{player.contrabandScore}}</p>
          </v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <p>Coins: {{player.coin}}</p>
          </v-flex>
        </v-layout>
      </v-card-text>

      <div class="footer" v-if="player.king || player.queen">
        <v-divider></v-divider>
        <v-card-text>
          <p style="color: orange;">
            <strong>
              Apple King
              <span style="float: right">+20</span>
            </strong>
          </p>
          <p style="color: silver;">
            <strong>
              Cheese Queen
              <span style="float: right">+10</span>
            </strong>
          </p>
        </v-card-text>
      </div>

      <v-dialog v-model="dialog" max-width="300">
        <template v-slot:activator="{ on }">
          <v-card-actions>
            <v-btn flat color="error" @click="dialog=true">Delete</v-btn>
            <!-- <v-btn flat color="orange">Explore</v-btn> -->
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
      subtitle: ''
    };
  },
  props: ["color", "player"],  
  methods: {
    ...mapActions(["deletePlayer"]),
    deleteNewPlayer(id) {
      this.deletePlayer(id);
      this.dialog = false;
    }
  },
};
</script>


<style scoped>
.player {
  margin-top: 10%;
  max-width: 350px;
}

.headline {
  font-family: 'Kaushan Script', cursive!important;
}

.title {
  color: white;
}
</style>

