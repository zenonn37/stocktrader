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
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>