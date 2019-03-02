<template>
  <v-app>
    <router-view />
    <Toolbar />
    <v-container grid-list-md text-ms-center fluid>
      <Dashboard/>
    </v-container>

    <div class="btn-add-container">
      <v-btn class="btn-add" fab dark color="indigo">
      <v-icon dark>add</v-icon>
    </v-btn>
    </div>
    
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Baseline from "./views/Baseline";
import Dashboard from "./views/Dashboard";
import Player from "./components/Player";
import Toolbar from "./components/Toolbar";

export default {
  name: "App",
  components: {
    HelloWorld,
    Baseline,
    Dashboard,
    Player,
    Toolbar
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.header {
  text-align: center;
  font-size: 2em;
  background-color: blueviolet;
  color: white;
}

.btn-add {
  float: right;
}

.btn-add-container {
  width: 100%; 
  padding: 8px; 
  position: fixed; 
  bottom: 0;
}
</style>

