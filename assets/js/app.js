const { createApp } = Vue;

createApp({
  data() {
    return {
      quote: null,
      api_base_url: "https://api.adviceslip.com/advice",
    };
  },
  methods: {
    getRandomAdvice(url) {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data.slip.advice);
          this.quote = response.data.slip.advice;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.getRandomAdvice(this.api_base_url);
  },
}).mount("#app");
