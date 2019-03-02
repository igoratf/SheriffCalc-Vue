<template>
  <div class="player">
    <v-card hover>
      <v-card-title primary-title class="title" :style="{backgroundColor: color}">
        <div>
          <h3 class="headline mb-0">{{ player.name }}</h3>
          <div>{{ card_text }}</div>
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
      
      <div class="footer">
      <hr>
      <v-card-text>
         <p style="color: orange;">
           <strong>Apple King
             <span style="float: right">+20</span>
           </strong>
         </p>
         <p style="color: silver;">
           <strong>Cheese Queen 
             <span style="float: right"> +10</span></strong>
          </p>
      </v-card-text>
      </div>

      <v-card-actions>
        <v-btn flat color="error" @click="deletePlayer(player.id)">Delete</v-btn>
        <!-- <v-btn flat color="orange">Explore</v-btn> -->
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      card_text: "Text"
    };
  },
  props: ['color', 'player'],
  methods: {
    ...mapMutations(['deletePlayer'])
  },
  mounted() {
    console.log(this.player);
  }
};
</script>


<style scoped>
.player {
  margin-top: 10%;
  max-width: 350px;
}

.title {
  color: white;
}

.container {
   display: flex;
   justify-content: space-around;
}
</style>

