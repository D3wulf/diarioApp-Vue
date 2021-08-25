<template>
  <div class=" entry-container mb-3 pointer p-2"
   @click="$router.push({ name:'datos', params: {id:100}})" >
      
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">24</span>
          <span class="mx-1 fs-5">Agosto</span>   
          <span class="mx-2 fw-light">2021, Martes</span>
      </div>

      <div class="entry-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aperiam nesciunt delectus nihil officiis optio magnam non molestias perferendis, fuga, dicta libero, autem excepturi ipsum est beatae temporibus consequuntur rem.
      </div>
  </div>
</template>

<script>

export default {
 
}
</script>

<style lang="scss" scoped>

.entry-container{
  border-bottom: 1px solid grey;
  transition: 0.2 all ease-in;

   &:hover {
     background-color: lighten($color:blue, $amount:45) ;
   }

   .entry-description{
     font-size: 12px;
   }
}



</style>