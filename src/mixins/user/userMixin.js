export default {
  methods: {
    createUser(userData){
      let storage = JSON.parse(localStorage.getItem('users'));
      storage.push(userData);
      localStorage.setItem('users', JSON.stringify(storage));

      this.userAuthorization(userData);
    },

    loginUser(userData){
      let storage = JSON.parse(localStorage.getItem('users'));

      console.log(storage, userData);
    },

    createUserValidation() {
      //validation
    },

    loginUserValidation(){
      //validation
    },

    userAuthorization(user){
      localStorage.setItem('user', JSON.stringify(user));

      this.watchUserInLocalStorage()

      this.$router.push('/personal');
    },

    userExit(){
      localStorage.setItem("user", '');

      this.watchUserInLocalStorage()

      this.$router.push('/');
    },

    watchUserInLocalStorage(){
      window.dispatchEvent(new CustomEvent('changeUser', {
        detail: {
          storage: localStorage.getItem('user')
        }
      }));

      console.log(localStorage.getItem('user'));
    }

  }
}