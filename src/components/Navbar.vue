<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'home' }">Projects</router-link>
    <router-link :to="{ name: 'add-project' }">New Project</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.main-nav {
  font-size: 20px;
  text-align: center;
  margin: 40px auto;
}

.main-nav a {
  display: inline-block;
  margin: 0 15px;
  text-decoration: none;
  color: #888;
}

.main-nav a:hover {
  color: #00ce89;
}

a.router-link-active {
  border-bottom: 2px solid #00ce89;
  padding-bottom: 4px;
}
</style>
