const app = new Vue({
  el: "#app",
  data: {
    mailList: [1],
  },
  methods: {},
  mounted() {
    function getMail() {
      let promesse = [];
      for (let index = 0; index < 10; index++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            promesse.push(response.data.response);
          });
      }
      Promise.all(promesse).then(() => {
        app.mailList = promesse;
      });
    }
    getMail();
    console.log(this.mailList);
  },
});
