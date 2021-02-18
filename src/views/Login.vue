<template>
  <div class="container m-auto mt-10 max-w-xl">
    <t-card>
      <div class="image">
        <router-link to="/" tag="a">
          <img class="mx-auto" src="../assets/img/Logo.png" alt="Logo eKopi" />
        </router-link>
      </div>
      <div>
        {{ email + password }}
      </div>
      <h1 class="text-2xl font-bold text-left ml-5 mb-8">Masuk</h1>
      <form class="login" action="" method="post">
        <div class="text-left">
          <t-input-group label="Email atau Nomor Handphone" class="mx-5 my-3">
            <t-input
              v-model="email"
              type="email"
              class=""
            ></t-input>
          </t-input-group>

          <t-input-group label="Password" class="mx-5 my-6">
            <t-input v-model="password" class="" type="password"></t-input>
          </t-input-group>

          <div class="flex justify-between mx-5">
            <div class="order-first">
              <t-checkbox id="remember_me" class="mr-3"></t-checkbox>
              <label for="remember_me" class="text-sm">Remember Me</label>
            </div>
            <div></div>

            <div class="order-last">
              <router-link to="">
                <router-link
                  class="text-sm text-right text-primary hover:underline"
                  to=""
                  tag="a"
                  >Lupa Password?</router-link
                >
              </router-link>
            </div>
          </div>
          <div class="mt-6 mx-5 mb-6">
            <t-button type="submit" class="w-full" @click="post()">Masuk</t-button>
          </div>

          <div class="mx-5 mb-8 text-sm">
            <p>
              Belum punya akun?
              <router-link
                class="text-primary hover:underline"
                to="/register"
                tag="a"
                >Daftar Sekarang</router-link
              >
            </p>
          </div>
        </div>
      </form>
    </t-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      email: 'kukur@gmail.com',
      password: 'kukur',
    }
  },

  methods: {
    login(){
      let email = this.email;
      let password = this.password;
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    },

    async post(url = 'http://express.percobaanekopi.xyz/user/login'){
    let data = JSON.stringify({"email":"kukur@gmail.com","password":"kukur"})

    let headers = { 'Authorization' : 'Bearer' + sessionStorage.getItem('token') }
    let res;
    await axios.post(url, data, {headers: headers})
      .then( resp => {
        res = JSON.stringify(resp.data)
        
      }).catch(err => {
        res = err
      })
      console.log(res)
      return res
    },
  }
}
</script>

<style lang="scss" scoped>
.image {
  img {
    width: 120px;
    height: auto;
  }
}
</style>