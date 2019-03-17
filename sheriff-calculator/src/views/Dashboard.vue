<template>
  <div>
    <Toolbar/>
    <v-container grid-list-md text-ms-center fluid>
      <div class="headline-container">
        <h1>Welcome to</h1>
        <br>
        <h1>Sheriff of Nottingham</h1>
        <br>
        <br>
        <h2 style="color: darkgoldenrod">Please insert new players to calculate a game score</h2>
      </div>
      <PlayerForm/>
      <v-layout justify-center row wrap>
        <v-flex shrink v-for="(player, index) in players" :key="index">
          <Player :color="colorMap[index]" :player="player"/>
        </v-flex>
      </v-layout>
    </v-container>

    <div class="btn-fixed-container">
      <div>
        <AddButton/>
      </div>

      <div>
        <ScoreButton/>
      </div>
    </div>
  </div>
</template>


<script>
import Player from "../components/Player";
import PlayerForm from "../components/PlayerForm";
import Toolbar from "../components/Toolbar";
import AddButton from "../components/AddButton";
import ScoreButton from "../components/ScoreButton";
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  components: {
    Player,
    PlayerForm,
    Toolbar,
    AddButton, 
    ScoreButton
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["colorMap", "players"])
  },
  mounted() {
    console.log(this.players);
  }
};
</script>

<style scoped>
.headline-container {
  text-align: center;
  font-weight: bolder;
  margin-top: 10%;
  font-family: 'Kaushan Script', cursive;
}

h1 {
  color: #3e51b5;
  font-size: 4em;
}
</style>


