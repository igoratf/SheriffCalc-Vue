<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span v-if="!editing" class="headline" :style="{color: playerColors[players.length]}">{{ name }}</span>
          <v-flex xs10 sm6 md4 v-else>
            <v-text-field class="headline" :style="{color: playerColors[players.length]}" v-model="name"></v-text-field>
          </v-flex>
          <v-btn icon>
            <v-icon @click="toggleEdit()">{{editing ? 'check' : 'edit'}}</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Apples*" v-model="apple" type="number" min=0 required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Breads*" v-model="bread" type="number" min=0 hint="example of helper text only on focus" required></v-text-field>
              </v-flex>
              <!-- <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex> -->
              <v-flex xs12 sm6 md4>
                <v-text-field label="Cheeses*" v-model="cheese" type="number" min=0 hint="example of helper text only on focus" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Chickens*" v-model="chicken" type="number" min=0 hint="example of helper text only on focus" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="contrabands*" v-model="contrabands" type="number" min=0 hint="example of helper text only on focus" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Coins*" v-model="coin" type="number" min=0 hint="example of helper text only on focus" required></v-text-field>
              </v-flex>
              <v-flex xs12>
               <v-combobox
                  v-model="select"
                  :items="items"
                  chips
                  multiple
                  label="I use chips"
               ></v-combobox>
               </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
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
         name: 'New Player',
         dialog: false,
         editing: false,
         apple: 0,
         bread: 0,
         cheese: 0,
         chicken: 0,
         contrabands: 0,
         coin: 0,
         select: ['Pepper'],
         selectedItems: [],
         items: ['Pepper', 'Silk', 'Crossbow', 'Blooming bread'],
         players: [],
         playerColors: {
            0: 'blue',
            1: 'green',
            2: 'purple',
            3: 'goldenrod',
            4: 'crimson'
         }
      }
   },
   methods: {
      toggleEdit() {
         this.editing = !this.editing;
      }
   }
}
</script>

<style scoped>
</style>


