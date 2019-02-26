<template>
   <v-container fluid>
      <v-layout justify-center row wrap>
      <v-flex shrink>
        <Player :color="'crimson'"/>
      </v-flex>
      <v-flex shrink>
        <Player :color="'goldenrod'"/>
      </v-flex>
      <v-flex shrink>
        <Player :color="'green'"/>
      </v-flex>
      <v-flex shrink>
        <Player :color="'mediumslateblue'"/>
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


