<template>
  <v-app>
    <Toolbar/>

    <v-container grid-list-md text-ms-center fluid>
      <router-view/>
    </v-container>

    <!-- <AddButton /> -->
    <div class="btn-fixed-container">
      <div>
        <AddButton/>
      </div>

      <div>
        <ScoreButton/>
      </div>
    </div>
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
.btn-fixed-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 8px;
}
</style>

