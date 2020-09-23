const app = Vue.createApp({
    data() {
      return {
        userInput: '',
        confirmedInput: ''
      };
    },
    methods: {
      confirmText(event){
        this.confirmedInput = event.target.value;
      },
      setText(event){
        this.userInput = event.target.value;
      },
      alarm(){
        alert('alarm');
      }
    }
  });
  
  app.mount('#assignment');
  