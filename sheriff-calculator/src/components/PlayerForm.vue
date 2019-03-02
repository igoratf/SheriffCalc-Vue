<template>
  <v-layout row justify-center>
     <v-btn color="primary" dark @click.stop="dialog = true">Open Dialog</v-btn>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span
            v-if="!editing"
            class="headline"
            :style="{color: playerColors[players.length]}"
          >{{ name }}</span>
          <v-flex xs10 sm6 md4 v-else>
            <v-text-field
              class="headline"
              :style="{color: playerColors[players.length]}"
              v-model="name"
            ></v-text-field>
          </v-flex>
          <v-btn icon>
            <v-icon @click="toggleEdit()">{{editing ? 'check' : 'edit'}}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Apples*" v-model="apple" type="number" min="0" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Breads*"
                  v-model="bread"
                  type="number"
                  min="0"
                  hint="example of helper text only on focus"
                  required
                ></v-text-field>
              </v-flex>
              <!-- <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>-->
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Cheeses*"
                  v-model="cheese"
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
                  type="number"
                  min="0"
                  hint="example of helper text only on focus"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Contrabands*"
                  v-model="contrabandPoints"
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
                  type="number"
                  min="0"
                  hint="example of helper text only on focus"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-combobox v-model="select" :items="items" chips multiple label="Contrabands">
                  <template v-slot:selection="data">
                      <v-chip
                        :key="JSON.stringify(data.item)"
                        :selected="data.selected"
                        :disabled="data.disabled"
                        class="v-chip--select-multi"
                        @input="data.parent.selectItem(data.item)"
                      >
                      <v-hover>
                        <v-avatar
                        slot-scope="{ hover }"
                        v-if="hover"
                        class="badge indigo white--text"
                        @click.stop="addContraband(data.item)">
                        <span>&#43;</span>
                        </v-avatar>
                        <v-avatar
                        v-else
                          class="badge indigo white--text"
                          v-text="contrabands[data.item]"
                          @click.stop="addContraband(data.item)"
                        ></v-avatar>
                      </v-hover>
                        {{ data.item }}
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
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
      name: "New Player",
      dialog: false,
      editing: false,
      apple: 0,
      bread: 0,
      cheese: 0,
      chicken: 0,
      contrabandPoints: 0,
      coin: 0,
      select: ["Pepper"],
      contrabands: {
         "Pepper": 0,
         "Silk": 0,   
      },
      items: ["Pepper", "Silk", "Crossbow", "Blooming bread"],
      players: [],
      playerColors: {
        0: "blue",
        1: "green",
        2: "purple",
        3: "goldenrod",
        4: "crimson"
      }
    };
  },
  methods: {
    toggleEdit() {
      this.editing = !this.editing;
    },
    increment(data) {
       console.log(data);
       this.quantity++;
    },
    addContraband(data) {
       console.log(data);
       if (this.contrabands[data]) {
          this.contrabands[data] += 1
       } else {
          this.contrabands[data] = 1
       }
       console.log('contrabando', this.contrabands);
    }
  }
};
</script>

<style scoped>
.badge:hover {
   cursor: pointer;
}
</style>


