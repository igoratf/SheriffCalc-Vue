<template>
   <v-container fluid>
     <PlayerForm />
      <v-layout justify-center row wrap>
      <v-flex shrink v-for="(player, index) in players" :key="index">
        <Player :color="colorMap[index]" :player="player"/>
      </v-flex>
      <!-- <v-flex shrink>
        <Player :color="colorMap[1]"/>
      </v-flex>
       <v-flex  shrink>
        <Player :color="colorMap[2]"/>
      </v-flex>
      <v-flex shrink>
        <Player :color="colorMap[3]"/>
      </v-flex>
      <v-flex shrink>
        <Player :color="colorMap[4]"/>
      </v-flex> -->
      </v-layout>
      <v-layout justify-center row v-if="players.length" style="margin-top: 5%;">
        <v-btn color="success"> Calculate Score <v-icon right> casino</v-icon></v-btn>
      </v-layout>
    </v-container>  
</template>


<script>
import Player from "../components/Player";
import PlayerForm from "../components/PlayerForm";
import { mapState } from 'vuex';
export default {
  name: "Dashboard",
  components: {
    Player,
    PlayerForm
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['colorMap', 'players'])
  },
  mounted() {
    console.log(this.players);
  }
};
</script>

<style scoped>
</style>


