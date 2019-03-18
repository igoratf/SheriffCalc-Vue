<template>
   <div id="toolbar" class="app-component">
   
   
   <v-toolbar color="indigo" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title @click.stop="toDashBoard()" class="home">Sheriff of Nottingham Score Calculator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
    <v-dialog v-model="dialog" persistent max-width="350">

         <template v-slot:activator="{ on }">
            <v-btn flat @click="dialog = true" v-on="on">New Game</v-btn>
         </template>

          <v-card>
        <v-card-title class="headline" :style="{color:currentColor}" ><strong>New Game</strong></v-card-title>
        <v-card-text :style="{color:currentColor}">Are you sure you want to start a new game? All players info will be lost</v-card-text>
        <v-card-actions>
          <v-btn color="green darken-1" flat @click="startNewGame()">Yes</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" flat @click="dialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
   </v-dialog>
        <!-- <v-btn flat>Link Two</v-btn> -->
        <v-btn flat @click.stop="toRanking()">Ranking</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
   name: "Toolbar",
   data() {
      return {
         dialog: false
      }
   },
   computed: {
      ...mapGetters(["currentColor"])
   },
   methods: {
      ...mapMutations(["newGame"]),
      startNewGame() {
         this.dialog = false;
         this.newGame();
      },
      toDashBoard() {
         this.$router.replace('/dashboard');
      },
      toRanking() {
         this.$router.replace('/ranking');
      }
   }
}
</script>


<style scoped>

.home:hover {
   cursor: pointer;
   transform: scale(1.1);
   transition: ease-in-out 0.4s;
   color: gold;
}
</style>


