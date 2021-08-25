<template>
  
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="home"><h1>Hola</h1>
    <button @click="irADiario" class="btn btn-primary">Primary</button>
    <button @click="irADiario" class="btn btn-secondary">Secondary</button>
    <button @click="irADiario" class="btn btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods:{
    irADiario(){
      this.$router.push({name:'sin-datos'})
    }
  }
}
</script>


