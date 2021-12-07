<template>
  <div class="dashboard">
    <div class="container dashboard__inner">
      <h1>{{ titlePage }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",

  data() {
    return {
      titlePage: "Dashboard",
    };
  },
};
</script>
<style scoped>
</style>