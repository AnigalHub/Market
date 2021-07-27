<template>
  <div id="catalog">
      <h1>Каталог</h1>
      <div id="categories">
        <div>Рюкзаки</div>
        <div>Футболки</div>
        <div>Рубашки</div>
      </div>
      <div id="order">
        <div id="sort">Сортировать по:</div>
        <div id="price">цене</div>

        <svg id="arrow" width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
        </svg>
        <div id="option">
          <div>По цене</div>
          <div>По популярности</div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "catalog"
    }
</script>
<style>
  ul{
    margin-block-start: 0 !important;
  }
</style>
<style scoped lang="scss">
  #catalog{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 1440px;
  }
  h1{
    position: absolute;
    width: 111px;
    height: 41px;
    left: 88px;
    top: 32px;
    font-family: 'PT Sans', sans-serif;
  }
  #sort{
    position: absolute;
    height: 21px;
    top:42px;
    left: 1191px;
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
  }
  #price{
    position: absolute;
    width: 34px;
    height: 21px;
    left: 1309px;
    top: 42px;
    font-family: 'PT Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
    color: #59606D;
  }
  #arrow{
    position: absolute;
    width: 5px;
    height: 2.5px;
    left: 1347px;
    top: 52px;
  }
  #categories{
    position: absolute;
    width: 161px;
    height: 95px;
    left: 87px;
    top: 97px;
    div{
      font-family: 'PT Sans', sans-serif;
      font-size: 16px;
      line-height: 37px;
      display: flex;
      align-items: flex-end;
      &:first-child{color: #1F1F1F;}
      &:nth-child(2){color: #959DAD;}
      &:nth-child(3){color: #59606D;}
    }

  }
  #option{
    position: absolute;
    width: 160px;
    height: 68px;
    left: 1192px;
    top: 69px;
    background: #FFFFFF;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
</style>
