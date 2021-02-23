<template>
  <div class="container m-auto my-10 max-w-xl">
    <t-card>
      <div class="image">
        <router-link to="/" tag="a">
          <img class="mx-auto" src="../assets/img/Logo.png" alt="Logo eKopi" />
        </router-link>
      </div>
      <h1 class="text-2xl font-bold text-left ml-5 mb-6">Daftar</h1>
      <template v-if="$store.state.status === 'error'">
        <t-alert show variant="danger" class="capitalize mx-5 -mt-3 mb-4" :dismissible=false>
        {{ $store.state.message }}
      </t-alert>
      </template>
      <ValidationObserver v-slot="{ passes }">
        <form action="" @submit.prevent="passes(register)">
          <div class="text-left">
            <ValidationProvider name="Nama Lengkap" rules="required" v-slot="{ errors }">
              <t-input-group label="Nama Lengkap" class="mx-5 my-3">
                <t-input :variant="errors[0] ? 'danger' : ''" v-model="nama" />
                <span class="block text-sm text-red-500"> {{ errors[0] }} </span>
              </t-input-group>
            </ValidationProvider>

            <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
              <t-input-group label="Email" class="mx-5 my-3" feedback="contoh: example@email.com">
                <t-input :variant="errors[0] ? 'danger' : ''" type="email" v-model="email" />
                <span class="block text-sm text-red-500"> {{ errors[0] }} </span>
              </t-input-group>
            </ValidationProvider>

            <ValidationProvider name="Password" rules="required|min:8" v-slot="{ errors }" vid="pass">
              <t-input-group label="Password" class="mx-5 my-6">
                <t-input :variant="errors[0] ? 'danger' : ''" class="" type="password" v-model="password" />
                <span class="block text-sm text-red-500"> {{ errors[0] }} </span>
              </t-input-group>
            </ValidationProvider>

            <ValidationProvider name="Konfrimasi Password" rules="required|confirmed:pass" v-slot="{ errors }">
              <t-input-group label="Konfirmasi Password" class="mx-5 my-6">
                <t-input :variant="errors[0] ? 'danger' : ''" class="" type="password" v-model="password_confirm" />
                <span class="block text-sm text-red-500"> {{ errors[0] }} </span>
              </t-input-group>
            </ValidationProvider>

            <div class="mt-6 mx-5 mb-6">
              <t-button type="submit" class="w-full">Daftar</t-button>
            </div>

            <div class="mx-5 mb-8 text-sm">
              <p>
                Sudah punya akun?
                <router-link class="text-brown-500 hover:underline" to="/login" tag="a">Login disini</router-link>
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
  data() {
    return {
      nama: '',
      email: '',
      password: '',
      password_confirm: '',
    };
  },
  methods: {
    register() {
      let nama = this.nama;
      let email = this.email;
      let noHp = this.noHp;
      let password = this.password;
      let password_confirm = this.password_confirm;
      this.$store
        .dispatch('post', {
          url: '/user',
          data: {
            nama: nama,
            email: email,
            noHp: noHp,
            password: password,
            password_confirm: password_confirm,
          },
        })
        .then(() => {
          if(this.$store.state.status === 'success'){
            this.$router.push('/login')
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
