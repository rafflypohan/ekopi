<template>
  <main>
    <t-dropdown tag-name="nav" :classes="{}" :fixed-classes="{}" class="fixed w-full">
      <div slot="trigger" slot-scope="{ mousedownHandler, blurHandler, keydownHandler, isShown }" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-between h-18">
          <div class="flex order-first">
            <div class="flex items-center mr-2 -ml-2 sm:hidden">
              <!-- Mobile menu button -->
              <button
                class="inline-flex items-center justify-center p-2 text-brown-500 transition duration-150 ease-in-out rounded-md hover:text-white focus:outline-none focus:text-white"
                aria-label="Main menu"
                aria-expanded="false"
                @mousedown="mousedownHandler"
                @blur="blurHandler"
                @keydown="keydownHandler"
              >
                <svg :class="{ hidden: isShown, block: !isShown }" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg :class="{ hidden: !isShown, block: isShown }" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="image flex items-center flex-shrink-0">
              <router-link to="/" tag="a">
                <img class="block w-auto" src="../assets/img/Logo.png" alt="" srcset="" />
              </router-link>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <router-link to="" tag="a" class="px-3 py-2 ml-4 leading-5 text-brown-500 transition duration-150 ease-in-out rounded-md focus:outline-none">
                Menu 1
              </router-link>
              <router-link to="" tag="a" class="px-3 py-2 ml-4  leading-5 text-brown-500 transition duration-150 ease-in-out rounded-md focus:outline-none">
                Menu 2
              </router-link>
            </div>
          </div>
          <div class="flex order-last">
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <template v-if="isLoggedIn == false">
                <router-link to="/login" tag="a" class="px-3 py-2 ml-4 leading-5 text-brown-500 transition duration-150 ease-in-out rounded-md focus:outline-none">
                  Masuk
                </router-link>
                <router-link to="/register" tag="a" class="px-5 py-3 ml-4 leading-5 text-gray-50 bg-brown-500 transition duration-150 ease-in-out font-medium rounded-md hover:bg-brown-400 focus:outline-none">
                  Daftar
                </router-link>
              </template>
              <template v-else>
                <router-link id="logout" to="" tag="a" class="px-3 py-2 ml-4 leading-5 text-brown-500 transition duration-150 ease-in-out rounded-md focus:outline-none" @click.native="logout">
                  Keluar
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:hidden">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <router-link
            to="/login"
            tag="a"
            class="block px-3 py-2 mt-1 text-base text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
          >
            Login</router-link
          >
          <router-link
            to="/register"
            tag="a"
            class="block px-3 py-2 mt-1 text-base text-blue-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
            >Register</router-link
          >
        </div>
      </div>
    </t-dropdown>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },

  methods: {
    logout() {
      // this.$store.dispatch('logout')
      this.$dialog
        .confirm({
          title: 'Keluar',
          text: 'Apakah anda yakin ingin keluar?',
          icon: 'info',
          okButtonText: 'Yakin',
          cancelButtonText: 'Batal',
          // variant: 'my-confirm',
          // ...More props
        })
        .then((result) => {
          console.log(result)
          if(result.isOk === true && result.isCancel === false && result.isDismissed === false){
            this.$store.dispatch('logout')
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.image {
  img {
    width: 100px;
    height: auto;
  }
}
</style>
