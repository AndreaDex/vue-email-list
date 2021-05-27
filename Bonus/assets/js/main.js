const app = new Vue({
  el: "#app",
  data: {
    mailList: [],
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
            if (promesse.length == 10) {
              app.mailList = promesse;
            }
          });
      }
    }
    getMail();
    console.log(this.mailList);
  },
});
