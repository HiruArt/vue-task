<template>
  <div>
    <Default />
  </div>
</template>
<script>
import Default from "./Layout/Default/Default";

export default {
  components: {
    Default,
  },
  name: "app",
  data() {
    return {};
  },
};
</script>
<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
}
.container {
  max-width: 1230px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.small-container {
  max-width: 550px;
  margin: 0 auto;
}

.form-block {
  padding: 20px;
  background: #eee;
  border-radius: 8px;
}

.w-100 {
  width: 100%;
}
</style>
