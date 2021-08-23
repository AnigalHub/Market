<template>
  <div id="basket_with_form">
    <div id="text">Товары в корзине</div>
    <div id="basket_products">
      <div class="basket_product"  v-for="product in Products" :key="product.name_product">
        <div class="flex-container">
          <img :src="product.img_src" :alt="product.img_alt">
          <div class="text_basket">
            <p class="name_product_basket">{{product.name_product}}</p>
            <p class="price_product_basket">{{product.price_product}}</p>
            <div class="star_basket">
              <component :is="product.star"/>
            </div>
          </div>
          <div class="delete_basket">
            <component :is="product.delete_basket"/>
          </div>
        </div>
      </div>
      <div id="order">Оформить заказ</div>
      <form>
        <input type="text" placeholder="Ваше имя">
        <input type="text" placeholder="Телефон">
        <input type="text" placeholder="Адрес">
        <button>Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
    import StarSVG from "~/components/svg/star_svg";
    import DeleteBasketSVG from "~/components/svg/delete_basket_svg";

    export default {
        name: "basket_with_form",
      data(){
          return{
            Products:[
              {star:StarSVG, number_star:"4.5", img_src:"./img.png", img_alt:"продукт", delete_basket:DeleteBasketSVG, name_product:"Рюкзак Louis Vuitton Discovery", price_product:"150 000 ₽",},
              {star:StarSVG, number_star:"4.5", img_src:"./img.png", img_alt:"продукт", delete_basket:DeleteBasketSVG, name_product:"Рюкзак Louis Vuitton Discovery", price_product:"150 000 ₽",},
              {star:StarSVG, number_star:"4.5", img_src:"./img.png", img_alt:"продукт", delete_basket:DeleteBasketSVG, name_product:"Рюкзак Louis Vuitton Discovery", price_product:"150 000 ₽",},
            ]
          }
      }
    }
</script>

<style scoped lang="scss">
  #basket_with_form{
    padding-top: 24px;
  }
  #text{
    padding-left: 48px;
    font-size: 18px;
    line-height: 23px;
    font-family: 'PT Sans', sans-serif;
  }
  #basket_products{
    padding: 16px 48px;
  }
  .basket_product{
    background: #FFFFFF;
    width: 364px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-bottom: 12px;
    img{
      width: 70.57px;
      height: 90px;
      padding: 15px 0 15px 25px;
    }
    .text_basket{
      padding-top: 12px;
      .name_product_basket{
        margin: 0 !important;
        font-family: 'PT Sans', sans-serif;
        font-size: 14px;
        line-height: 18px;
        width: 170px;
        height: 36px;
        padding-left: 34.43px;
      }
      .price_product_basket{
        margin: 0 !important;
        width: 63px;
        height: 18px;
        font-size: 14px;
        line-height: 18px;
        padding-top: 6px;
        padding-left: 34.43px;
        font-weight: bold;
        font-family: 'PT Sans', sans-serif;
      }
      .star_basket{
        width: 34px;
        height: 20px;
        padding-top: 16px;
        padding-left: 34.43px;
        padding-bottom: 12px;
      }
    }
    .delete_basket{
      padding: 49px 22px 49px 0;
      width: 20px;
      height: 22px;
    }
  }
  #order{
    margin: 0 !important;
    font-family: 'PT Sans', sans-serif;
    font-size: 18px;
    line-height: 23px;
  }
  form{
    input{
      margin-top: 16px;
      border: none !important;
      width: 96%;
      background: #F8F8F8;
      padding: 14px 0 15px 14px;
      color: #959DAD;
    }
    button{
      margin-top: 24px;
      width: 100%;
      height: 50px;
      background: #1F1F1F;
      color: #FFFFFF;
      text-align: center;
    }
    input,button{
      font-size: 16px;
      line-height: 21px;
      border-radius: 8px;
      font-family: 'PT Sans', sans-serif;
    }
  }
</style>
