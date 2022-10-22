<template>
  <Navbar class="navbar" />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}
</style>
