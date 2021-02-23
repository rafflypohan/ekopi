<template>
  <div class="container m-auto mt-10 max-w-xl">
    <t-card>
      <div class="image">
        <router-link to="/" tag="a">
          <img class="mx-auto" src="../assets/img/Logo.png" alt="Logo eKopi" />
        </router-link>
      </div>
      <h1 class="text-2xl font-bold text-left ml-5 mb-6">Masuk</h1>

      <template v-if="$store.state.status === 'success'">
        <t-alert variant="success" class="capitalize mx-5 -mt-3 mb-4" show>
          Akun anda berhasil didaftarkan. Silahkan Login
        </t-alert>
      </template>

      <template v-else-if="$store.state.status === 'error'">
        <t-alert variant="danger" class="capitalize mx-5 -mt-3 mb-4" show :dismissible=false>
          {{ $store.state.message }}
        </t-alert>
      </template>

      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="login" @submit.prevent="handleSubmit(login)">
          <div class="text-left">
            <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
              <t-input-group label="Email" class="mx-5 my-3">
                <t-input :variant="errors[0] ? 'danger' : ''" v-model="email" type="email" class="" />
                <span class="block text-sm text-red-500"> {{ errors[0] }} </span>
              </t-input-group>
            </ValidationProvider>

            <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
              <t-input-group label="Password" class="mx-5 my-6">
                <t-input :variant="errors[0] ? 'danger' : ''" v-model="password" class="" type="password" />
                <span class="block text-sm text-red-500"> {{ errors[0] }} </span>
              </t-input-group>
            </ValidationProvider>

            <div class="flex justify-between mx-5">
              <div class="order-first">
                <t-checkbox id="remember_me" class="mr-3"></t-checkbox>
                <label for="remember_me" class="text-sm">Remember Me</label>
              </div>
              <div></div>

              <div class="order-last">
                <router-link to="">
                  <router-link class="text-sm text-right text-brown-500 hover:underline" to="" tag="a">Lupa Password?</router-link>
                </router-link>
              </div>
            </div>
            <div class="mt-6 mx-5 mb-6">
              <t-button type="submit" class="w-full font-medium">Masuk</t-button>
            </div>

            <div class="mx-5 mb-8 text-sm">
              <p>
                Belum punya akun?
                <router-link class="text-brown-500 hover:underline" to="/register" tag="a">Daftar Sekarang</router-link>
              </p>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </t-card>
  </div>
</template>

<script>
export default {
  props: ['status'],
  data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch('post', {
          url: '/user/login',
          data: { email: email, password: password },
        })
        .then(() => {
          if(this.$store.state.status === 'success'){
            this.$router.push('/tes')
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  img {
    width: 120px;
    height: auto;
  }
}
</style>
