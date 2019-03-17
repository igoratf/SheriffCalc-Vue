<template>
  <div>
    <div class="text-xs-center">
      <v-dialog v-model="dialog" width="500">
        <v-card class="app-component" style="font-size: 1.25em">
          <v-card-title class="headline success white--text">Calculate Score</v-card-title>

          <v-card-text>
            <p style="font-size: 1.25em">
              <strong>Do you really want to calculate the game score?</strong>
            </p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn color="success" flat @click="calculateScore()">Confirm</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="error" flat @click.stop="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn fab dark style="background-color: forestgreen" v-on="on" @click="dialog = true">
          <v-icon>mdi-calculator</v-icon>
          <span class="mdi mdi-calculator"></span>
        </v-btn>
      </template>
      <span>Calculate score</span>
    </v-tooltip>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "ScoreButton",
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapState(['players'])
  },
  methods: {
    ...mapActions(['calculateScore'])
  }
};
</script>

<style scoped>
.headline {
  font-family: 'Kaushan Script', cursive!important;
}
</style>


