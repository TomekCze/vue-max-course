const app = Vue.createApp({
    data() {
      return {
        myName: 'Tomek',
        myAge: 32,
        imageURL: 'https://i.pinimg.com/originals/b3/ac/98/b3ac98cc8a0b268ea204246486ae5def.jpg'
      };
    },
    methods: {
      myAgePlus5: function() {
        return this.myAge + 5;
      },
      randomNumber: function() {
          return Math.round(Math.random());
      }
    }
  });
  
  app.mount('#assignment');