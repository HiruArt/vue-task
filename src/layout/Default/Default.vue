<template>
  <main class="default">
    <Header />
    <router-view />
  </main>
</template>

<script>
import Header from "../../components/Header/Header";

export default {
  name: "Default",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script> 
<style scoped>
.default {
  width: 100%;
  min-height: 100vh;
}
</style>