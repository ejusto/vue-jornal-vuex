<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div>
      <button v-on:click="goToDaybook" class="btn btn-primary">Primay</button>
      <button v-on:click="goToDaybook" class="btn btn-secondary">Secondary</button>
      <button v-on:click="goToDaybook" class="btn btn-success">Success</button>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'daybook' })
    }  
  }
}
</script>
