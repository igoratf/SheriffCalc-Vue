<template>
   <div id="buy-coffee-root">
   </div>
</template>
<script>
import postscribe from 'postscribe'
    export default {
        name: "BuyCoffeeButton",
        mounted: function () {
         postscribe('#buy-coffee-root', `<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="igoratf" data-color="#5F7FFF" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#ffffff" data-coffee-color="#FFDD00" ><\/script>`)
      }
   }
</script>

<style scoped>

</style>
