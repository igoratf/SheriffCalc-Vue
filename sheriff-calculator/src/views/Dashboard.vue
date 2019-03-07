<template>
  <div>
    <Toolbar/>
    <v-container grid-list-md text-ms-center fluid>
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
</style>


