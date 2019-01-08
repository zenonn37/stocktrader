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
        <input type="number" placeholder="Quantity" class="uk-input" v-model="quantity">
        <br>
        <vk-button
          type="secondary"
          @click="buyStock"
          :disabled=" insufficientFunds ||quantity <= 0"
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
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>