<template>
  <div class="app-component">
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn class="btn-add" fab dark color="indigo" v-on="on" @click="openPlayerDialog()">
          <v-icon dark>add</v-icon>
        </v-btn>
      </template>

      <span>Add new player</span>
    </v-tooltip>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["openPlayerDialog"])
  }
};
</script>

<style scoped>

</style>


