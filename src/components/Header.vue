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
      <router-link to="/stocks" tag="li" slot="right">
        <a>End of Day</a>
      </router-link>
      <vk-navbar-nav-dropdown title="Save/Load">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item @click="save" title="Save" active></vk-nav-item>
          <vk-nav-item @click="load" title="Load"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
    </vk-navbar-nav>
  </vk-navbar>
</template>

<script>
export default {
  methods: {
    save() {
      console.log("saved");
    },
    load() {
      console.log("loaded");
    }
  }
};
</script>