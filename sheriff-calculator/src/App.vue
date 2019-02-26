<template>
  <v-app>
    <v-responsive>
      <h1> Sheriff of Nottingham Score</h1>
    </v-responsive>
    <v-container grid-list-md text-ms-center fluid>
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
