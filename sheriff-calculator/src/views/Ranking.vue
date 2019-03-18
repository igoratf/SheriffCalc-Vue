<template>
  <div id="ranking" class="app-component">
    <Toolbar/>
    <v-container text-center>
      <v-layout row wrap justify-center text-center>
        <v-flex xs12>
          <h1 class="ranking-headline">Player Ranking - Top 100</h1>
        </v-flex>
        <v-flex xs12></v-flex>

        
      </v-layout>
      <v-data-table :headers="headers" :items="playerRanking" class="elevation-1 table">
          <template v-slot:no-data>
            <v-alert :value="true" color="error" icon="warning">Sorry, no players have been loaded :(</v-alert>
          </template>

          <template v-slot:items="props" class="data-table">
            <td>{{ props.index + 1 }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.score }}</td>
          </template>
        </v-data-table>
    </v-container>
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";
import { mapState, mapActions } from "vuex";
export default {
  name: "Ranking",
  components: {
    Toolbar
  },
  data() {
    return {
      headers: [
        {
          text: "Position",
          align: "left",
          sortable: false,
          value: "index"
        },
        {
          text: "Name",
          value: "name"
        },
        {
          text: "Score",
          value: "score"
        }
      ]
    };
  },
  computed: {
    ...mapState(["playerRanking"])
  },
  methods: {
    ...mapActions(["getPlayerRanking"])
  },
  mounted() {
    this.getPlayerRanking();
  }
};
</script>

<style scoped>
.ranking-headline {
  font-size: 2.5em;
  color: darkgoldenrod;
}


.table {
   margin-top: 24px;
}

</style>


