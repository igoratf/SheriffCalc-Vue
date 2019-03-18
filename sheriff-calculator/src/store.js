import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [],
    colorMap: {
      0: "#3e51b5",
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
    newGame() {
      this.state.players = [],
      this.state.playerDialog = false;
    },
    updatePlayer(state, payload) {
      let playerId = payload.id;
      let player = this.state.players.find(player => player.id === playerId);

      Vue.set(player, payload.property, payload.value);      
    },
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
      axios.delete('/player', {data: {id: id}})
      .then((res) => commit('deletePlayer', id))
      .catch(err => console.log(err));
    },
    calculateScore({commit}) {
      if (this.state.players.length) {
        let players_id = this.state.players.map(player => player.id);
        console.log('player Ids', players_id);
        axios.post('/score', {players_id: players_id})
        .then(res => {
          let response = res.data;
          console.log(res.data);
          this.state.players.map(player => {
            commit('updatePlayer', {id: player.id, property: 'score', value: response[player.id].score})
            let kings = [];
            let queens = [];
            if (response[player.id].kingOrQueen) {
              kings = response[player.id].kingOrQueen.kings;
              queens = response[player.id].kingOrQueen.queens;
            }
            commit('updatePlayer', {id: player.id, property: 'kings', value: kings});
            commit('updatePlayer', {id: player.id, property: 'queens', value: queens});
            
          })

          console.log('pós score', this.state.players);
        })
        .catch(err => console.log(err));
      }
    },
  },
});
