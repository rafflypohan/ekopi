<template>
  <div class="main">
    <nav>
      <Navbar/>
    </nav>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navigation'
export default {
  components:{
    Navbar
  }
}
</script>