<template>
  <div id="basket">
    <div class="flex-container">
      <h1>Корзина</h1>
      <div id="close" @click="CloseClicked">
        <component :is="close"/>
      </div>
    </div>
    <div>
      <empty_basket v-if="isEmpty"/>
      <basket_with_form v-if="isForm"/>
      <successful_basket v-if="isSuccessful"/>
    </div>
  </div>
</template>

<script>
    import CloseSVG from "~/components/svg/close_svg";
    import Empty_basket from "~/components/basket/empty_basket";
    import Basket_with_form from "~/components/basket/basket_with_form";
    import Successful_basket from "~/components/basket/successful_basket";
    export default {
      name: "basket",
      components: {Successful_basket, Basket_with_form, Empty_basket},
      data() {
        return {
          close: CloseSVG,
        }
      },
      computed:{
        Products: function () {
          return this.$store.getters['basketStore/Products']
        },
        isEmpty:function (){
          return this.$store.getters['basketStore/Products'].length == 0 && this.$store.getters['basketStore/OrderSend'] == false
        },
        isForm:function (){
          return this.$store.getters['basketStore/Products'].length != 0 && this.$store.getters['basketStore/OrderSend'] == false
        },
        isSuccessful:function (){
          return this.$store.getters['basketStore/OrderSend'] == true
        },
      },
      methods:{
        CloseClicked:function () {
          this.$emit('closeClicked')
          this.$store.dispatch('basketStore/SetOrderSend',false)
        },
      }
    }
</script>

<style scoped lang="scss">
  #basket{
    position: absolute;
    width: 460px;
    height:calc(100% + 66px);
    left: 980px;
    top: -66px;
    background: #FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0 0 8px;
    z-index: 2;

    h1{
      width: 118px;
      height: 41px;
      padding-left: 48px;
      padding-top: 52px;
      font-size: 32px;
      line-height: 41px;
      font-family: 'PT Sans', sans-serif;
    }
    #close{
      padding-top: 65px;
      margin-left: 227px;
      &:hover{cursor: pointer;}
    }
  }
</style>
