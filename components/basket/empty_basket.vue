<template>
  <div id="empty_basket">
    <div id="text">Пока что вы ничего не добавили в корзину.</div>
    <button>Перейти к выбору</button>
  </div>
</template>

<script>
    export default {
        name: "empty_basket"
    }
</script>

<style scoped lang="scss">
  #empty_basket{
    padding-top: 24px;
  }
  #text{
    padding-left: 48px;
    font-size: 22px;
    height: 56px;
    line-height: 28px;
  }
  button{
    margin: 24px 48px 0;
    height: 50px;
    background: #1F1F1F;
    color: #FFFFFF;
    border-radius: 8px;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
  }
  #text,button{
    width: 364px;
    font-family: 'PT Sans', sans-serif;
  }
</style>
