<template>
  <div class="container small">
    <div class="small-container form-block">
      <h2>Registration</h2>
      <form class="form">
        <div class="form-group">
          <Input :label="'Nickname'" v-model="nickname" />
        </div>
        <div class="form-group">
          <Input :label="'Password'" v-model="password" :type="'password'" />
        </div>
        <div class="form-group">
          <Input
            :label="'Repeat password'"
            v-model="passwordRepeat"
            :type="'password'"
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
    };
  },
  methods: {
    submit() {
      let userData = {
        name: this.nickname,
        password: this.password,
        audioFlag: true,
      };

      this.createUser(userData);
    },
  },
};
</script>

<style scoped>
</style>