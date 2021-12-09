<template>
  <div class="dashboard">
    <div class="container dashboard__inner">
      <h1>{{ titlePage }}</h1>

      <div class="form-block">
        <h2>List of users</h2>

        <template v-if="users">
          <ul>
            <li v-for="(user, index) in users" :key="index">
              {{ user.name }}
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",

  data() {
    return {
      titlePage: "Dashboard",
      users: null,
    };
  },

  mounted() {
    this.users = JSON.parse(localStorage.getItem("users"));
  },
};
</script>
<style scoped>
.form-block {
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
}
h2 {
  text-align: center;
}

ul {
  column-count: 2;
}
</style>