<template>
  <div id="app">
    <div class="loading" v-loading="loading"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.$message('message');
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.loading {
  width: 500px;
  height: 500px;
  background: red;
}
</style>
