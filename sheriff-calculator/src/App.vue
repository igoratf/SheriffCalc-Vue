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

