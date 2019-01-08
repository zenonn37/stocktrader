<template>
  <vk-grid>
    <app-stock v-for="stock in stocks" :key="stock.id" v-bind:stock="stock"></app-stock>
  </vk-grid>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock
  },
  data() {
    return {
      stocks: [
        {
          id: 1,
          name: "BMW",
          price: 200
        },
        {
          id: 2,
          name: "Google",
          price: 250
        },
        {
          id: 3,
          name: "Ford",
          price: 89.0
        },
        {
          id: 4,
          name: "Twitter",
          price: 8
        }
      ]
    };
  }
};
</script>