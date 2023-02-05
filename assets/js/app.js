const { createApp } = Vue;

createApp({
  data() {
    return {
      quote: null,
      loading: true,
      api_base_url: "https://api.adviceslip.com/advice",
    };
  },
  methods: {
    getRandomAdvice(url) {
      axios
        .get(url)
        .then((response) => {
          this.quote = response.data.slip.advice;
          this.loading = false;
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
