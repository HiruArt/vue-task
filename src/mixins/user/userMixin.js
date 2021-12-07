export default {
  methods: {
    createUser(userData){
      let storage =  JSON.parse(localStorage.getItem('users'));
      storage.push(userData);
      localStorage.setItem('users', JSON.stringify(storage));
    }
  }
}