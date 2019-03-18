<template>
  <div id="ranking" class="app-component">
    <Toolbar/>
    <v-container grid-list-md text-ms-center fluid>
      <v-layout align-center justify-center row wrap>
        <v-flex xs12 style="text-align: center">
          <h1 class="ranking-headline">Player Ranking - Top 100</h1>
        </v-flex>
        <v-flex xs12></v-flex>

        
      </v-layout>
      <v-data-table :headers="headers" :items="playerRanking" :pagination.sync="pagination" class="elevation-1 table">
          <template v-slot:no-data>
            <v-alert :value="true" color="error" icon="warning">Sorry, no players have been loaded :(</v-alert>
          </template>

          <template v-slot:items="props">
            <td class="table-data">{{ props.index + 1 }}</td>
            <td class="table-data">{{ props.item.name }}</td>
            <td class="table-data">{{ props.item.score }}</td>
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
          value: "index",
          class: "table-header"
        },
        {
          text: "Name",
          value: "name"
        },
        {
          text: "Score",
          value: "score"
        }
      ],
      pagination: {
         rowsPerPage: 10
      }
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

<style>
.ranking-headline {
  font-size: 2.5em;
  color: darkgoldenrod;
}

.table-header {
   font-size: 1.1em!important;
}

.table-data {
   font-size: 1.2em!important;
   color: green;
}

.table {
   margin-top: 24px;
}

.table th.column {
   color: darkgoldenrod!important;
   font-size: 1.1em;
}

</style>


