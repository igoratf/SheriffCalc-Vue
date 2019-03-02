<template>
   <v-container fluid>
      <v-layout justify-center row wrap>
      <v-flex shrink>
        <Player :color="colorMap[0]"/>
      </v-flex>
      <v-flex shrink>
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
      </v-flex>
      </v-layout>
    </v-container>  
</template>


<script>
import Player from "../components/Player";
import { mapState } from 'vuex';
export default {
  name: "Dashboard",
  components: {
    Player
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['colorMap'])
  }
};
</script>

<style scoped>
</style>


