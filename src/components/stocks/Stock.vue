<template>
  <div>
    <vk-card class="uk-width-1-2@m">
      <vk-card-title>{{stock.name}}</vk-card-title>
      <small>(Price:{{stock.price}})</small>
      <p>
        Lorem ipsum
        <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div>
        <input type="number" placeholder="Quanity" class="uk-input" v-model="quanity">
        <br>
        <vk-button
          type="secondary"
          @click="buyStock"
          :disabled=" insufficientFunds || quanity <= 0"
        >{{insufficientFunds ? 'Insufficient Funds':'Buy Stock'}}</vk-button>
      </div>
      <div></div>
    </vk-card>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quanity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quanity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quanity: parseInt(this.quanity)
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quanity = 0;
    }
  }
};
</script>