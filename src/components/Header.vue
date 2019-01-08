t<template>
  <vk-navbar>
    <vk-navbar-logo>Logo</vk-navbar-logo>
    <vk-navbar-nav>
      <router-link to="/" tag="li" activeClass="active" exact>
        <a>Home</a>
      </router-link>
      <router-link to="/portfolio" tag="li">
        <a>Portfolio</a>
      </router-link>
      <router-link to="/stocks" tag="li">
        <a>Stocks</a>
      </router-link>
      <vk-nav-item @click="endDay" title="End of Day"></vk-nav-item>

      <vk-navbar-nav-dropdown title="Save/Load">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item @click="save" title="Save" active></vk-nav-item>
          <vk-nav-item @click="load" title="Load"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
    </vk-navbar-nav>
    <li>Funds:{{funds | currency}}</li>
  </vk-navbar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    save() {
      console.log("saved");
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    load() {
      console.log("loaded");
      this.loadData();
    }
  }
};
</script>