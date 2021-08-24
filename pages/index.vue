<template>
  <div>
    <navbar v-on:basketClicked="showBasket"/>
    <div class="background">
      <catalog/>
      <basket v-if="isBasketShowing" v-on:closeClicked="hideBasket"/>
    </div>
  </div>
</template>

<script>
  import Catalog from "~/components/catalog";
  import Basket from "~/components/basket";
  export default {
    components: {Basket, Catalog},
    data(){
      return{
        isBasketShowing:false,
      }
    },
    methods:{
      showBasket: function () {
        this.isBasketShowing = true;
      },
      hideBasket:function () {
        this.isBasketShowing = false;
      }
    }
  }
</script>

<style  lang="scss">
  body{
    margin: 0 !important;
  }
  h1{
    margin: 0 !important;
  }
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
