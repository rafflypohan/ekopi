<template>
  <main class="p-8 text-left">
    <p> Status : 
      {{ $store.state.status }}
    </p>
    <p>
      User : 
      {{ $store.state.user }}
    </p>
    <p>
      Token : 
      {{ $store.state.token }}
    </p>
    
    <p>
      Message : 
      {{ $store.state.message }}
    </p>

  </main>
</template>