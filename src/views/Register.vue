<template>
  <div class="container m-auto my-10 max-w-xl">
    <t-card>
      <div class="image">
        <router-link to="/" tag="a">
          <img class="mx-auto" src="../assets/img/Logo.png" alt="Logo eKopi" />
        </router-link>
      </div>
      <h1 class="text-2xl font-bold text-left ml-5 mb-8">Daftar</h1>
      <form action="" method="post">
        <div class="text-left">
          <t-input-group label="Nama Lengkap" class="mx-5 my-3">
            <t-input v-model="nama"></t-input>
          </t-input-group>

          <t-input-group
            label="Email"
            class="mx-5 my-3"
            feedback="contoh: example@email.com"
          >
            <t-input type="email" v-model="email"></t-input>
          </t-input-group>

          <t-input-group
            label="Nomor Handphone"
            class="mx-5 my-3"
            feedback="contoh: 08123456789 atau +628123456789"
          >
            <t-input
              type="tel"
              pattern="^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$"
              v-model="noHp"
            ></t-input>
          </t-input-group>

          <t-input-group label="Password" class="mx-5 my-6">
            <t-input class="" type="password" v-model="password"></t-input>
          </t-input-group>

          <t-input-group label="Konfirmasi Password" class="mx-5 my-6">
            <t-input
              class=""
              type="password"
              v-model="password_confirm"
            ></t-input>
          </t-input-group>

          <div class="mt-6 mx-5 mb-6">
            <t-button type="submit" class="w-full" @click="register()"
              >Daftar</t-button
            >
          </div>
          
          <div class="mx-5 mb-8 text-sm">
            <p>
              Sudah punya akun?
              <router-link
                class="text-yellow-900 hover:underline"
                to="/login"
                tag="a"
                >Login disini</router-link
              >
            </p>
          </div>
        </div>
      </form>
    </t-card>
  </div>
</template>

<script>

export default{
  data(){
    return{
      nama: 'ya kukur',
      email: 'kukur@gmail.com',
      noHp: '0812345678910',
      password: 'kukur',
      password_confirm: 'kukur'
    }
  },
  methods:{ 
    register(){
      let data = {
        name: this.nama,
        email: this.email,
        noHp: this.noHp,
        password: this.password,
        password_confirm: this.password_confirm
      };
      this.$store.dispatch('register', data)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
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