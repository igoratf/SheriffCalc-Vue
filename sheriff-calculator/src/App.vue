<template>
  <v-app id="app">
    <!-- <Toolbar/> -->
    <router-view/>

  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import AddButton from "./components/AddButton";
import ScoreButton from "./components/ScoreButton";

export default {
  name: "App",
  components: {
    Toolbar,
    AddButton,
    ScoreButton
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
#app {
  background-color: #f5f5f5;
}

.app-component, .v-list__tile__title {
  font-family: 'Kaushan Script', cursive!important; 
}

.v-input .v-label,
.v-messages__message {
  font-size: 1.3em;
}

.btn-fixed-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 8px;
}
</style>

