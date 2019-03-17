<template>
<!-- > -------- TO WORK ON -------- < -->
  <div class="app-component">
    <v-container grid-list-md text-xs-center class="home-container">
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex >
          <h1 class="header">Welcome to Sheriff of Nottingham Score Calculator</h1>
        </v-flex>
      
        <v-flex style="margin-top: 20px">
          <v-btn class="btn-start" outline round large color="success">Start new game</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  /* font-family: 'Shojumaru', cursive; */
  /* font-family: 'Chewy', cursive; */
  /* font-family: 'Luckiest Guy', cursive; */
  /* font-family: 'Chelsea Market', cursive; */
  /* font-family: 'Knewave', cursive; */
  font-size: 1.5em;
  font-weight: bold;
  height: 100%;
  width: 100%;
  /* background: linear-gradient(rgb(88, 25, 159), rgb(163, 83, 177)); */
  /* background: linear-gradient(#3f51b5, mediumseagreen); */
  /* background: linear-gradient(rgb(22, 21, 116), rgb(108, 166, 250)); */
  color: white;
}

.home-container {
   max-width: 500px;
}

.app-component {
   margin-top: 10%;
}

.header {
  /* display: flex; */
  text-align: center;
  position: relative;
  top: 15%;
  font-size: 1.8em;
  color: darkslateblue;
}

.btn-start {
  margin-top: 5%;
}
</style>


