<template>
  <div class="nav" >
    <div class="background">
      <div id="TestList">TestList</div>
      <div @click="BasketClicked">
        <component id="nav_basket" :is="basket"  />
        <div id="number_basket">
          <div id="number">3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BasketSVG from "./svg/basket_svg";
    export default {
      name: "navbar",
      data() {
        return {
          basket:BasketSVG,
        }
      },
      methods:{
        BasketClicked:function () {this.$emit('basketClicked')}
      }
    }
</script>

<style scoped lang="scss">
  .nav {
    width: 100%;
    height: 66px;
    margin: 0 auto;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0 0 8px 8px;
  }
  #TestList{
    width: 72px;
    height: 28px;
    font-size: 22px;
    line-height: 28px;
    color: #59606D;
    float: left;
    padding: 18px 0 0 88px;
  }
  #nav_basket{
    width: 24px;
    height: 26.4px;
    float: right;
    padding: 20px 108px 19.6px 0;
     &:hover{cursor: pointer;}
  }
  #number_basket{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #959DAD;
    position: absolute;
    right: 102px;
    top: 16px;
  }
  #number{
    color: #FFFFFF;
    font-size: 8px;
    width: 5px;
    height: 10px;
    line-height: 10px;
    padding: 2px 4px 0 3px;
  }
  #TestList,#number{
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
  }
  @media screen and  (max-width: 860px) {
    #nav_basket{padding: 20px 10px 19.6px 20px;}
    #number_basket{right: 5px;}
  }
  @media screen and  (max-width: 530px) {
    #TestList{padding: 18px 0 0 20px;}
  }
</style>
