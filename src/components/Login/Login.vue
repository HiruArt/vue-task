<template>
  <div class="container small">
    <div class="small-container form-block">
      <h2>Login</h2>
      <form class="form">
        <div class="form-group">
          <Input
            :label="'Nickname'"
            v-model="nickname"
            :class="{ error: validation.nickname }"
          />
        </div>
        <div class="form-group">
          <Input
            :label="'Password'"
            v-model="password"
            :type="'password'"
            :class="{ error: validation.password }"
          />
        </div>
        <div class="form-btn">
          <Button @click.native="submit" :value="'Sign in'" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import userMixin from "../../mixins/user/userMixin";

export default {
  name: "Login",

  components: {
    Input,
    Button,
  },

  mixins: [userMixin],

  data() {
    return {
      nickname: "",
      password: "",

      validation: {
        nickname: false,
        password: false,
      },
    };
  },

  methods: {
    submit() {
      let userData = {
        name: this.nickname,
        password: this.password,
      };

      if (!this.validationField()) return;

      this.loginUser(userData);
    },

    validationField() {
      let nameValid = true,
        passwordValid = true;

      this.validation = {
        nickname: false,
        password: false,
      };

      if (this.nickname === "") {
        this.validation.nickname = true;
        nameValid = false;
      }

      if (this.password === "") {
        this.validation.password = true;
        passwordValid = false;
      }

      return nameValid && passwordValid;
    },
  },
};
</script>

<style scoped></style>