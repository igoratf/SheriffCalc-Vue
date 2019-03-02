import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
    id: 0,
    colorMap: {
      0: "rgb(0,0,255)",
      1: "rgb(0,128,0)",
      2: "rgb(128,0,128)",
      3: "rgb(218,165,32)",
      4: "rgb(178,34,34)", 
    },
    playerDialog: false
  },
  mutations: {
    openDialog() {
      if (this.state.players.length < 5) {
        this.state.playerDialog = true;
      } else {
        alert('Invalid number of players');
      }
    },
    closeDialog() {
      this.state.playerDialog = false;
    },
    addPlayer(state, player) {
      if (player) {
        player.id = this.state.id++;
        this.state.players.push(player);
      }

      console.log(this.state.players);
    },
    deletePlayer(state, id) {
      for (let i=0; i<this.state.players.length; i++) {
        let player = this.state.players[i];
        if (player.id === id) {
          this.state.players.splice(i, 1);
        }
      }
    }
  },
  actions: {

  },
});
