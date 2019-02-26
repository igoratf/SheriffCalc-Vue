<template>
  <v-app>
    <v-container grid-list-md text-ms-center>
      <Dashboard />
    </v-container>  
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Baseline from "./views/Baseline";
import Dashboard from "./views/Dashboard";
import Player from "./components/Player";

export default {
  name: "App",
  components: {
    HelloWorld,
    Baseline,
    Dashboard,
    Player
  },
  data() {
    return {
      //
    };
  }
};
</script>
