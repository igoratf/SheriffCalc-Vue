<template>
  <v-app id="app">
    <!-- <Toolbar/> -->
    <router-view />
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
    ScoreButton,
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    // Redirect to the new URL when the app mounts
    window.location.href = "https://sheriff-of-nottingham-calculator.vercel.app/";
  },
};
</script>

<style>
#app {
  background-color: #f5f5f5;
}

.app-component,
.v-list__tile__title {
  font-family: "Kaushan Script", cursive !important;
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
