<template>
  <header class="header">
    <div class="container header__inner">
      <div class="header_home">
        <router-link to="/">Home</router-link>
      </div>
      <nav>
        <ul>
          <template v-if="user">
            <li>
              <p>
                Hello,
                <strong v-if="this.$route.name === 'personal'">{{
                  JSON.parse(user).name
                }}</strong>
                <router-link v-else to="/personal">
                  <strong> {{ JSON.parse(user).name }}</strong></router-link
                >
              </p>
            </li>
            <li>
              <span @click="userExit">Exit</span>
            </li>
          </template>
          <template v-else>
            <li>
              <router-link to="/auth/login">Sign in</router-link>
            </li>
            <li>
              <router-link to="/auth/registration">Sign up</router-link>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import userMixin from "../../mixins/user/userMixin";
export default {
  name: "Header",

  mixins: [userMixin],

  data() {
    return {
      user: "",
    };
  },

  mounted() {
    window.addEventListener("changeUser", (event) => {
      this.user = event.detail.storage;
    });
  },
};
</script>

<style scoped>
.header__inner {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
}
nav {
  display: flex;
}
ul {
  display: flex;
  margin: 0;
  height: 0;
  list-style: none;
  margin: 0 -10px;
}
li {
  padding: 0 10px;
}
li p {
  margin: 0;
}
.header_home a,
li a,
li span {
  cursor: pointer;
  text-decoration: none;
}

.header_home a:hover,
li a:hover,
li span:hover {
  text-decoration: underline;
}
</style>