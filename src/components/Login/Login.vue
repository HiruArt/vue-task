<template>
  <div class="container">
    <div class="small-container form-block">
      <h2>Login</h2>
      <form class="form">
        <div class="form-group">
          <Input :label="'Nickname'" v-model="nickname"/>
        </div>
        <div class="form-group">
          <Input :label="'Password'" v-model="password" :type="'password'" />
        </div>
        <div class="form-btn">
          <Button :value="'Sign in'" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

export default {
  name: "Login",

  components: {
    Input,
    Button,
  },

  data() {
    return {
      nickname: "",
      password: "",
    };
  },
};
</script>

<style scoped></style>