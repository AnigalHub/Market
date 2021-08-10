<template>
  <div id="option">
    <div v-for="name in filter">
     <div> {{name.name}}</div>
    </div>
    <div>По цене</div>
    <div>По популярности</div>
  </div>
</template>

<script>
    export default {
        name: "filter",
        data(){
          return{
            filter:[
              {name:"по цене"},
              {name: "по популярности"}
            ]
          }
        }
    }
</script>

<style scoped>

</style>
