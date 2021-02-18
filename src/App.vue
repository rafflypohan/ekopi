<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  created(){
    this.$http.interceptors.response.use(undefined, (err) => {
      return new Promise(() => {
        if(err.status === 401 && err.config && !err.config.__isRetryRequest){
          this.$store.dispatch('logout')
        }
        throw err;
      })
    })
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap");

#app {
  font-family: "Nunito Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>
