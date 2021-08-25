
<template>
 <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>


 </div>

 <Fav />
 
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {

    components:{
        Fav: defineAsyncComponent(()=> import('../components/Fav.vue'))
    }

}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}

</style>