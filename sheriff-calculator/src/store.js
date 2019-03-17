import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
  getters: {
    currentColor: state => state.colorMap[state.players.length]
  },
  mutations: {
    openPlayerDialog() {
      if (this.state.players.length < 5) {
        this.state.playerDialog = true;
      } else {
        alert('Invalid number of players');
      }
    },
    closePlayerDialog() {
      this.state.playerDialog = false;
    },
    addPlayer(state, player) {
      if (player) {
        this.state.players.push(player);
      }
    },
    deletePlayer(state, id) {
      for (let i = 0; i < this.state.players.length; i++) {
        let player = this.state.players[i];
        if (player.id === id) {
          this.state.players.splice(i, 1);
        }
      }
    },
    calculateKingAndQueen(state, resource) {
      console.log(resource);
      let kings = [];
      let queens = [];
      let scoreTotal = 0;

      let listByResource = this.state.players
        .concat()
        .sort((a, b) => (a[resource] > b[resource] ? -1 : 1));
      kings.push(listByResource[0]);

      for (let i = 1; i < listByResource.length; i++) {
        let player = listByResource[i];
        if (listByResource[i][resource] === kings[0][resource]) {
          kings.push(player);
          player["king"]
            ? player["king"].push(resource)
            : player["king"] = [resource];
        } else if (
          queens.length === 0 ||
          listByResource[i][resource] === queens[0][resource]
        ) {
          queens.push(player);
          player["queen"]
            ? player["queen"].push(resource)
            : player["queen"] = [resource];
        }
      }

      let longest_list = Math.max(kings.length, queens.length);
      let bonusKing = 0;
      let bonusQueen = 0;

      if (resource === "apple") {
        bonusKing = 20;
        bonusQueen = 10;
      } else if (resource === "bread" || resource === "cheese") {
        bonusKing = 15;
        bonusQueen = 10;
      } else {
        bonusKing = 10;
        bonusQueen = 5;
      }

      for (let i = 0; i < longest_list; i++) {
        let kingPlayer = kings[i];
        let queenPlayer = queens[i];
      
        if (kingPlayer) {
          kingPlayer["score"] += bonusKing;
          scoreTotal += bonusKing;
        }
        if (queenPlayer) {
          queenPlayer["score"] += bonusQueen;
          scoreTotal += bonusQueen;
        }
      }

      console.log('total', scoreTotal);
    }
  },
  actions: {
    addNewPlayer({commit}, player) {
      axios.post('/player', player)
      .then((res) => {
        if (res.data.id) {
          player.id = res.data.id;
          console.log(player);
          commit('addPlayer', player)
        } else {
          console.log('error registering: player has no id');
        }
      })
      .catch(err => console.log(err));
    },
    deletePlayer({commit}, id) {
      axios.delete('/player', id)
      .then((res) => commit('deletePlayer', id))
      .catch(err => console.log(err));
    },
    calculateScore({commit}) {
      if (this.state.players.length) {
        const appleScore = 2;
        const breadScore = 3;
        const cheeseScore = 3;
        const chickenScore = 4;
        for (let i = 0; i < this.state.players.length; i++) {
          let player = this.state.players[i];
          let score = 0;
          score += appleScore * player.apple;
          score += breadScore * player.bread;
          score += cheeseScore * player.cheese;
          score += chickenScore * player.chicken;
          score += player.contrabandScore;
          score += player.coin;
          player.score = score;
        }


        commit('calculateKingAndQueen', "apple");
        commit('calculateKingAndQueen', "bread");
        commit('calculateKingAndQueen', "cheese");
        commit('calculateKingAndQueen', "chicken");

        console.log(this.state.players);
      }
    },
  },
});
