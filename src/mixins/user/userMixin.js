export default {
  methods: {
    createUser(userData){
      let storage = JSON.parse(localStorage.getItem('users'));
      storage.push(userData);
      localStorage.setItem('users', JSON.stringify(storage));

      this.userAuthorization(userData);
    },

    userAuthorization(user){
      localStorage.setItem('user', JSON.stringify(user));
      this.$router.push('/personal');
    },

    // changeLocalStorage(key, data){
    //   window.dispatchEvent(new CustomEvent('foo-key-localstorage-changed', {
    //     detail: {
    //       storage: localStorage.getItem('foo-key')
    //     }
    //   }));
    // }
  }
}