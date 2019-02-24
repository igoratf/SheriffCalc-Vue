<template>
  <div class="player">
    <v-card hover>
      <v-card-title primary-title class="title">
        <div>
          <h3 class="headline mb-0">Player 1</h3>
          <div>{{ card_text }}</div>
        </div>
      </v-card-title>
      <v-card-text>
        <p>Apple</p>
        <p>Cheese</p>
        <p>Bread</p>
        <p>Chicken</p>
        <p>Contraband total</p>
        <p>Coins</p>
      </v-card-text>
      
      <hr>
      <v-card-text>
         <p style="color: orange;"><strong>Apple King</strong></p>
         <p style="color: silver;"><strong>Cheese Queen</strong></p>
      </v-card-text>

      <v-card-actions>
        <v-btn flat color="orange">Edit</v-btn>
        <v-btn flat color="orange">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card_text: "Text"
    };
  }
};
</script>


<style scoped>
.player {
  margin-top: 10%;
}

.title {
  background-color: blue;
  color: white;
}

.container {
   display: flex;
   justify-content: space-around;
}
</style>

