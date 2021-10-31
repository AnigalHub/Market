<template>
  <div>
    <navbar v-on:basketClicked="showBasket"/>
    <div class="background">
      <catalog />
      <basket v-if="isBasketShowing" v-on:closeClicked="hideBasket"/>
    </div>
  </div>
</template>

<script>
  import Catalog from "~/components/catalog";
  import Basket from "~/components/basket";
  export default {
    components: {Basket, Catalog},
    name:"index",
    data(){
      return{
        isBasketShowing:false,
      }
    },
    async fetch(){
      try{
        this.$store.dispatch('ProductsStore/SetProducts',((await this.$axios.get('https://frontend-test.idalite.com/api/product?category')).data))
      } catch (error) {
        console.log("Ошибка:", error)
      }
    },
    methods:{
      showBasket: function () {
        this.isBasketShowing = true;
      },
      hideBasket:function () {
        this.isBasketShowing = false;
      },
    },
    created: function () {
      this.$store.dispatch('basketStore/refreshSavedState')
    },
  }
</script>

<style  lang="scss">
  body{margin: 0 !important;}
  h1{margin: 0 !important;}
  .background{
    margin-left: auto;
    margin-right: auto;
    width: 1440px;
    position: relative;
  }
  .flex-container{display: flex;}

  nav{
    ul{margin-left: -40px !important;}
    li{
      display: flex;
      align-items: flex-end;
    }


  }
</style>
<style>
  @media screen and (min-width: 1220px) and (max-width: 1460px) {
    .background{width: 1200px !important;}
  }
  @media screen and (min-width: 1020px) and (max-width: 1220px) {
    .background{width: 992px !important;}
  }
  @media screen and (min-width: 860px) and (max-width: 1020px) {
    .background{width: 835px !important;}
  }
  @media screen and (min-width: 670px) and (max-width: 860px) {
    .background{width: 650px !important;}
  }
  @media screen and (min-width: 530px) and (max-width: 670px) {
    .background{width: 500px !important;}
  }
  @media screen and  (max-width: 530px) {
    .background{width: 100% !important;}
  }
</style>
