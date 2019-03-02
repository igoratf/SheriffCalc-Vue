<template>
  <v-app>
    <Toolbar />
    
    <v-container grid-list-md text-ms-center fluid>
      <router-view />
    </v-container>

    <AddButton />
    
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Baseline from "./views/Baseline";
import Dashboard from "./views/Dashboard";
import Player from "./components/Player";
import Toolbar from "./components/Toolbar";
import AddButton from "./components/AddButton";

export default {
  name: "App",
  components: {
    Toolbar,
    AddButton
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
</style>

