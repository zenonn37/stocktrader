<template>
  <div>
    <vk-card class="uk-width-1-2@m">
      <vk-card-title>{{stock.name}}</vk-card-title>
      <small>(Price:{{stock.price}} | Quanity: {{stock.quantity}})</small>
      <p>
        Lorem ipsum
        <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div>
        <input type="number" placeholder="Quanity" class="uk-input" v-model="quanity">
        <vk-button
          @click="sellStocks"
          :disabled=" insufficientQuanity || quanity <= 0"
        >{{ insufficientQuanity ? 'Not enough Stocks' : 'Sell'}}</vk-button>
      </div>
      <div></div>
    </vk-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quanity: 0
    };
  },
  computed: {
    insufficientQuanity() {
      return this.quanity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellStocks() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quanity: parseInt(this.quanity)
      };
      this.sellStock(order);
    }
  }
};
</script>