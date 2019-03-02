<template>
  <div class="btn-add-container">
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn class="btn-add" fab dark color="indigo" v-on="on" @click="openDialog()">
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
    ...mapMutations(["openDialog"])
  }
};
</script>

<style scoped>
.btn-add {
  float: right;
}

.btn-add-container {
  padding: 8px;
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>


