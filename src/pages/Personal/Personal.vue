<template>
  <div class="personal">
    <div class="container personal__inner">
      <h1>{{ titlePage }}</h1>

      <div class="personal__block form-block" v-if="user">
        <h2 class="personal__title">User</h2>
        <div class="personal__row">
          Nickname:
          <span>{{ user.name }}</span>
        </div>
        <div class="personal__row">
          Passowrd:
          <span>{{ user.password }}</span>
        </div>
        <div v-if="user.audioFlag">
          <audio controls ref="audio">
            <source
              src="../../assets/audio/ukraine-gimn.mp3"
              type="audio/mp3"
            />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import userMixin from '../../mixins/user/userMixin';
export default {
  name: "Personal",

  mixins: [userMixin],

  data() {
    return {
      titlePage: "Personal",
      user: null,
    };
  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));

    if (this.user.audioFlag) {
      setTimeout(() => {
        this.$refs.audio.play();

        let userUpdate = {
          name: this.user.name,
          password: this.user.password
        }

        localStorage.setItem('user', JSON.stringify(userUpdate));
      }, 1);
    }

    if (!this.user) {
      this.$router.push("/");
    }
  },
};
</script>
<style scoped>
.personal__block {
  max-width: 300px;
  margin: 0 auto;
}

.personal__row {
  font-size: 16px;
  margin-bottom: 15px;
}

.personal__row span {
  font-weight: bold;
}

audio {
  width: 100%;
}
</style>