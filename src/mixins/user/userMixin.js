export default {
  methods: {
    createUser(userData){
      let storage = JSON.parse(localStorage.getItem('users'));
      storage.push(userData);
      localStorage.setItem('users', JSON.stringify(storage));

      this.userAuthorization(userData, true); // audio = true
    },

    loginUser(userData){
      if(this.userExist(userData)){
        this.userAuthorization(userData);
      } else {
        alert ('Such a user does not exist or an incorrect password has been entered!');
      }
    },

    userExist(userData){
      let storage = JSON.parse(localStorage.getItem('users'));
      let userExistFlag = false;
      storage.map((item) => {
        if(item.name === userData.name && item.password === userData.password){
          userExistFlag = true
        }
      })

      return userExistFlag
    },

    userAuthorization(user, audio = false){
      if(audio){
        user['audioFlag'] = true
      }
      localStorage.setItem('user', JSON.stringify(user));

      this.watchUserInLocalStorage()

      this.$router.push('/personal');
    },

    userExit(){
      localStorage.setItem("user", '');
      this.watchUserInLocalStorage()

      if(localStorage.getItem('user') === '' && this.$route.name !== 'dashboard'){
        this.$router.push('/');
      }
    
    },

    watchUserInLocalStorage(){
      return window.dispatchEvent(new CustomEvent('changeUser', {
        detail: {
          storage: localStorage.getItem('user')
        }
      }));
    }

  }
}