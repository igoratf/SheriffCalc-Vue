<template>
  <v-layout row justify-center>
    <!-- <v-btn color="primary" dark @click.stop="openNewPlayerDialog()">Open Dialog</v-btn> -->
    <v-dialog v-model="playerDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span v-if="!editing" class="headline" :style="{color: currentColor}">{{ name }}</span>
          <v-flex xs10 sm6 md4 v-else>
            <v-text-field class="headline" :color="currentColor" v-model="name"></v-text-field>
          </v-flex>
          <v-btn icon>
            <v-icon @click="toggleEdit()">{{editing ? 'check' : 'edit'}}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Apples*"
                  v-model="apple"
                  :color="currentColor"
                  type="number"
                  min="0"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Breads*"
                  v-model="bread"
                  type="number"
                  :color="currentColor"
                  min="0"
                  hint="example of helper text only on focus"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Cheeses*"
                  v-model="cheese"
                  :color="currentColor"
                  type="number"
                  min="0"
                  hint="example of helper text only on focus"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Chickens*"
                  v-model="chicken"
                  :color="currentColor"
                  type="number"
                  min="0"
                  hint="example of helper text only on focus"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Contrabands*"
                  v-model="contrabandScore"
                  :color="currentColor"
                  type="number"
                  min="0"
                  hint="example of helper text only on focus"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Coins*"
                  v-model="coin"
                  :color="currentColor"
                  type="number"
                  min="0"
                  hint="example of helper text only on focus"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-combobox
                  v-model="selectedContrabands"
                  :color="currentColor"
                  :items="contrabands"
                  item-text="name"
                  item-value="name"
                  return-object
                  tags
                  chips
                  multiple
                  deletable-chips
                  hint="Press the selected contraband number to increment quantity"
                  persistent-hint
                  label="Contrabands"
                >
                  <template v-slot:selection="data">
                    <v-chip close
                      :key="JSON.stringify(data.item)"
                      :selected="data.selected"
                      :disabled="data.disabled"
                      class="v-chip--select-multi"
                      @click.stop="data.parent.selectedIndex = data.index"
                      @input="removeContraband(data.item)"
                    >
                      <v-hover>
                        <v-avatar
                          slot-scope="{ hover }"
                          v-if="hover"
                          class="badge white--text"
                          :style="{backgroundColor: currentColor}"
                          @click.stop="addContraband(data.item)"
                        >
                          <span>&#43;</span>
                        </v-avatar>
                        <v-avatar
                          v-else
                          class="badge white--text"
                          :style="{backgroundColor: currentColor}"
                          @click.stop="addContraband(data.item)"
                        ><span>{{data.item.quantity}}</span></v-avatar> 
                      </v-hover>

                      {{ data.item.name }}

                       <!-- <div class="v-chip__close">
                          <v-icon>cancel</v-icon>
                      </div> -->
                    </v-chip>
                  </template>
                </v-combobox>
              </v-flex>
            </v-layout>
          </v-container>

          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="closeDialog()" :style="{color: currentColor}">Close</v-btn>
          <v-btn flat @click="addNewPlayer()" :style="{color: currentColor}">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "PlayerForm",
  data() {
    return {
      name: "New player",
      editing: false,
      apple: 0,
      bread: 0,
      cheese: 0,
      chicken: 0,
      contrabandScore: 0,
      coin: 0,
      selectedContrabands: [],
      contrabands: [{"name": "Pepper", "quantity": 0}, {"name": "Silk", "quantity": 1}]
    };
  },
  computed: {
    ...mapState(["players", "playerDialog", "colorMap"]),
    currentColor() {
      return this.colorMap[this.players.length];
    }
  },
  methods: {
    ...mapMutations(["openDialog", "closeDialog"]),
    logObject(item) {
      console.log(item);
    },
    toggleEdit() {
      this.editing = !this.editing;
    },
    increment(data) {
      console.log(data);
      this.quantity++;
    },
    addContraband(item) {
      console.log(item);
      this.selectedContrabands.forEach(element => {
         if (element.name === item.name) {
            element.quantity++;
         }
      })
    },
    removeContraband(item) {
      for (let i=0; i<this.selectedContrabands.length; i++) {
        let current = this.selectedContrabands[i];
        if (current.name === item.name) {
          current.quantity = 0;
          return this.selectedContrabands.splice(i, 1);
        }
      }
    },
    openNewPlayerDialog() {
      if (this.players.length < 5) {
        this.openDialog();
      } else {
        alert("Max numbers of players reached");
      }
    },
    resetForm() {
      this.apple = 0;
      this.bread = 0;
      this.cheese = 0;
      this.chicken = 0;
      this.coin = 0;
      this.contrabandScore = 0;
      this.name = "New player";
      this.editing = false;
    },
    addNewPlayer() {
      var player = {
        name: this.name,
        apple: Number(this.apple),
        bread: Number(this.bread),
        cheese: Number(this.cheese),
        chicken: Number(this.chicken),
        contrabandScore: Number(this.contrabandScore),
        contrabands: this.selectedContrabands,
        coin: Number(this.coin),
        score: 0
      };
      this.$store.commit('addPlayer', player);
      this.resetForm();
      this.closeDialog();
    }
  },
  watch: {
    select(val) {}
  }
};
</script>

<style scoped>
.badge:hover {
  cursor: pointer;
  content: "-"!important;
}
</style>


