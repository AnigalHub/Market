<script src="../../nuxt.config.js"></script>
<template>
  <div id="products">
    <div class="product"  v-for="(product,index) in Products" :key="index">
      <div class="flex-container">
        <div class="star flex-container">
          <component :is="star"/>
          <div class="rating">{{product.rating}}</div>
        </div>
        <img :src="'https://frontend-test.idalite.com' + product.photo" :alt="product.name">
        <div class="basket" @click="addToBasket(product)">
          <component :is="basket"/>
        </div>
      </div>
      <p class="name">{{product.name}}</p>
      <p class="price">{{numberWithSpaces(product.price)}} ₽</p>
    </div>
  </div>
</template>

<script>
  import {numberWithSpaces} from "~/components/general_functions/numberWithSpaces";
  import StarSVG from "~/components/svg/star_svg";
    import BasketSVG from "~/components/svg/basket_svg";
    export default {
      name: "products",
      data(){
        return{
          star:StarSVG,
          basket:BasketSVG,
          numberWithSpaces:numberWithSpaces,
        }
      },
      computed:{
        Products: function () {
          return this.$store.getters['ProductsStore/ProductsAll']
        }
      },
      methods:{
        addToBasket:function (product) {
          this.$store.dispatch('basketStore/addProductState',product)
        },
      },

    }
</script>

<style scoped lang="scss">
  #products{
    width: 1104px;
    padding: 24px 0 66px;
    display: flex;
    flex-wrap: wrap;
  }
  .product{
    width: 264px;
    height: 272px;
    margin: 0 16px 16px 0;
    background: #FFFFFF;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    &:nth-child(4n){margin-right: 0 !important;}
    &:hover{cursor: pointer;}
    .star{
      width: 61px;
      padding: 17px 0 0 16px;
    }
    img{
      padding-top: 18px;
      width: 142.71px;
      height: 180px;
    }
    .star svg{
      width: 34px;
      height: 20px;
      float: left;
    }
    .star .rating{
      font-size: 14px;
      color: #F2C94C;
      margin-left: -15px;
      margin-top: 2.5px;
    }
    .basket{
      width: 60.29px;
      svg{
        width: 12px;
        height: 13.2px;
        float: right;
        padding: 17.5px 18px 0 0;
      }
    }
    .name{
      padding: 16px 0 0 16px;
      width: 186px;
      height: 18px;
    }
    .price{
      padding: 6px 0 0 16px;
      width: 63px;
      height: 18px;
      font-weight: bold;
    }
    .name,.price{
      margin: 0 !important;
      font-family: 'PT Sans', sans-serif;
      display: flex;
      align-items: flex-end;
      font-size: 14px;
      line-height: 18px;
    }
  }
  @media screen and  (max-width: 530px) {
    #products {width: 400px;}
    .product{margin-left: 100px;}
  }
</style>
