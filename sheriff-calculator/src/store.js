import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'https://sheriffcalculator-api.herokuapp.com';
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
    playerDialog: false,
    playerRanking: [],
    contrabandList: []
  },
  getters: {
    currentColor: state => state.colorMap[state.players.length]
  },
  mutations: {
    setContrabands(state, contrabands) {
      this.state.contrabandList = contrabands;
    },
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
    setPlayerRanking(state, players) {
      state.playerRanking = players;
    },
  
  },
  actions: {
    getContrabands({commit}) {
      axios.get('/contraband')
      .then(res => commit('setContrabands', res.data));
    },
    addNewPlayer({commit}, player) {
      axios.post('/player', player)
      .then((res) => {
        if (res.data.id) {
          player.id = res.data.id;
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
        axios.post('/score', {players_id: players_id})
        .then(res => {
          let response = res.data;
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
        })
        .catch(err => console.log(err));
      }
    },
    getPlayerRanking({commit}) {
      axios.get('/ranking')
      .then((res) => commit('setPlayerRanking', res.data))
      .catch(err => console.log(err));
    }
  },
});
