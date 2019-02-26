<template>
   <v-container grid-list-md text-ms-center>
      <v-layout row wrap>
      <v-flex xs6 sm3 md3 lg3 xl3>
        <Player />
      </v-flex>
      <v-flex xs6 sm3 md3 lg3 xl3>
        <Player />
      </v-flex>
      <v-flex xs6 sm3 md3 lg3 xl3>
        <Player />
      </v-flex>
      <v-flex xs6 sm3 md3 lg3 xl3>
        <Player />
      </v-flex>
      </v-layout>
    </v-container>  
</template>


<script>
import Player from "../components/Player";
export default {
  name: "Dashboard",
  components: {
    Player
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>


