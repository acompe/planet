<template>
  <div style="height: 100%;">
    <router-view></router-view>
    <bar></bar>
  </div>
</template>

<script>
  import bar from "./planet/bar";
  export default {
    name: "planet",
    components: {
      bar:bar
    },
  }
</script>

<style scoped>

</style>
