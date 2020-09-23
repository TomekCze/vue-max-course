const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name
    },
    submitForm() {
      alert('Submitted!');
    },
    add(num) {
      this.counter = this.counter + num;
    },
    minus(num) {
      this.counter = this.counter - num;
    },
    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
