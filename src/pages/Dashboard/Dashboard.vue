<template>
  <div class="dashboard">
    <div class="container dashboard__inner">
      <h1>{{ titlePage }}</h1>

      <div class="form-block">
        <h2>List of users</h2>
        <template v-if="users">
          <ul>
            <li v-for="(user, index) in users" :key="index">
              <div>
                <small>login:</small> {{ user.name }} <br />
                <small>pass:</small> {{ user.password }}
                <br />
              </div>
            </li>
          </ul>
        </template>
        <template v-if="users.length === 0 || users === null">
          <div class="empty-users">
            <p>No users have been created yet</p>

            <Button
              value="Create user"
              @click.native="changeRegistrationPopup(true)"
            />
          </div>
        </template>
      </div>
    </div>

    <RegistrationPopup
      v-if="isModalRegistrationPopup"
      @close="changeRegistrationPopup(false)"
    />
  </div>
</template>
<script>
import Button from "../../components/UI/Button/Button.vue";
import RegistrationPopup from "./popups/RegistrationPopup/RegistrationPopup.vue";

export default {
  name: "Dashboard",
  components: {
    Button,
    RegistrationPopup,
  },

  data() {
    return {
      titlePage: "Dashboard",
      users: "",
      isModalRegistrationPopup: false,
    };
  },

  mounted() {
    this.users = JSON.parse(localStorage.getItem("users"));
  },

  methods: {
    changeRegistrationPopup(val) {
      this.isModalRegistrationPopup = val;
    },
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
  display: flex;
  flex-wrap: wrap;
}

li {
  width: 50%;
  margin-bottom: 10px;
}

.empty-users {
  text-align: center;
}
</style>