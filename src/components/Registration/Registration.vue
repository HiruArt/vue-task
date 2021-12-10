<template>
  <div class="container small">
    <div class="small-container form-block">
      <h2>Registration</h2>
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
        <div class="form-group">
          <Input
            :label="'Repeat password'"
            v-model="passwordRepeat"
            :type="'password'"
            :class="{ error: validation.passwordRepeat }"
          />
        </div>
        <div class="form-btn">
          <Button :value="'Sign up'" @click.native="submit" />
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
  name: "Registration",
  components: {
    Input,
    Button,
  },
  mixins: [userMixin],
  data() {
    return {
      nickname: "",
      password: "",
      passwordRepeat: "",

      validation: {
        nickname: false,
        password: false,
        passwordRepeat: false,
      },
    };
  },
  methods: {
    submit() {
      let userData = {
        name: this.nickname,
        password: this.password,
      };

      if (!this.validationField(userData)) return;

      this.createUser(userData);
    },

    validationField(userData) {
      let nameValid = true,
        passwordValid = true,
        userExist = false;

      this.validation = {
        nickname: false,
        password: false,
        passwordRepeat: false,
      }

      if (this.userExist(userData)) {
        alert("A user with this name already exists!");
        userExist = true;
      }

      if(this.nickname === ""){
        this.validation.nickname = true
        nameValid = false
      }

      if (this.password === "" || this.password !== this.passwordRepeat) {
        this.validation.password = true;
        this.validation.passwordRepeat = true;
        passwordValid = false;
      }

      return nameValid && passwordValid && !userExist;
    },
  },
};
</script>

<style scoped>
</style>