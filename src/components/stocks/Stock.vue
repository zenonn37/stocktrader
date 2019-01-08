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
        <vk-button @click="buyStock" :disabled="quanity <= 0 || !Number.isInteger">Buy</vk-button>
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
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quanity: this.quanity
      };
      console.log(order);
      this.quanity = 0;
    }
  }
};
</script>