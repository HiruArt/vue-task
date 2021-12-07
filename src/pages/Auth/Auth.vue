<template>
  <div class="auth">
    <div class="container auth__inner">
      <h1>Authorization</h1>

      <div class="w-100">

      <template v-if="$route.params.type === 'login'">
        <Login />
      </template>
      <template v-if="$route.params.type === 'registration'">
        <Registration />
      </template>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";

export default {
  name: "Auth",
  components: {
    Login,
    Registration,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
  .auth__inner{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>
