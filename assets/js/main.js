const app = new Vue({
  el: "#app",
  data: {
    mailList: [],
  },
  methods: {},
  mounted() {
    for (let index = 0; index < 10; index++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.mailList.push(response.data.response);
        });
    }
  },
});
