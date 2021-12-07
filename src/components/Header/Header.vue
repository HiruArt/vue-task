<template>
  <header class="header">
    <div class="container header__inner">
      <div class="header_home">
        <router-link to="/">Home</router-link>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/auth/login">Sign in</router-link>
          </li>
          <li>
            <router-link to="/auth/registration">Sign up</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {};
  },
};
</script>

<style scoped>
.header__inner{
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
}
nav{
  display: flex;
}
ul{
  display: flex;
  margin: 0;
  height: 0;
  list-style: none;
  margin: 0 -10px;
}
li{
  padding: 0 10px;
}
</style>