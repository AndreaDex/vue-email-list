const app = new Vue({
  el: "#app",
  data: {
    mailList: [1],
  },
  methods: {},
  mounted() {
    function getMail() {
      let promises = [];
      for (let index = 0; index < 10; index++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            promises.push(response.data.response);
          });
      }
      Promise.all(promises).then(() => {
        console.log(promises);
      });
    }
    getMail();
  },
});
