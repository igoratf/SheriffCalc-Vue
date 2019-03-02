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
      for (let i = 0; i < this.state.players.length; i++) {
        let player = this.state.players[i];
        if (player.id === id) {
          this.state.players.splice(i, 1);
        }
      }
    },
    calculateScore() {
      if (this.state.players.length) {
        const appleScore = 2;
        const breadScore = 3;
        const cheeseScore = 3;
        const chickenScore = 4;
        for (let i = 0; i < this.state.players.length; i++) {
          let player = this.state.players[i];
          player.score += appleScore * player.apple;
          player.score += breadScore * player.bread;
          player.score += cheeseScore * player.cheese;
          player.score += chickenScore * player.chicken;
          player.score += player.contrabandScore;
          player.score += player.coin;
        }

        let sortApple = this.state.players.concat().sort((a, b) => {
          if (a.apple >= b.apple) return -1;
          else return 1;
        })

        console.log(sortApple);
      }

    }
  },
  actions: {

  },
});
