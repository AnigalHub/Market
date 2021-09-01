<template>
  <div id="products">
    <div class="product"  v-for="(product,index) in Products" :key="index">
      <div class="flex-container">
        <div class="star flex-container">
          <component :is="star"/>
        </div>
        <img :src="product.img_src" :alt="product.name">
        <div class="basket" @click="addToBasket(product)">
          <component :is="basket"/>
        </div>
      </div>
      <p class="name">{{product.name}}</p>
      <p class="price">{{product.price}}</p>
    </div>
  </div>
</template>

<script>
    import StarSVG from "~/components/svg/star_svg";
    import BasketSVG from "~/components/svg/basket_svg";
    export default {
      name: "products",
      data(){
        return{
          star:StarSVG,
          basket:BasketSVG,
          Products:[
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
            {id:1, name:"Рюкзак Louis Vuitton Discovery",price:"150 000 ₽",
              rating:"4.5", img_src:"./img.png",category:1 },
          ]
        }
      },
      methods:{
        addToBasket:function (product) {
          this.$store.dispatch('basketStore/addProductState',product)
        }
      }
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
    &:nth-child(4), &:nth-child(8), &:nth-child(12){margin-right: 0 !important;}
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
</style>
