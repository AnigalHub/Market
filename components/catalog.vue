<template>
  <div id="catalog">
      <h1>Каталог</h1>
      <div id="categories">
        <div>Рюкзаки</div>
        <div>Футболки</div>
        <div>Рубашки</div>
      </div>
      </div>
    <div class="card">
      d
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
   h1,#sort,#price{
    position: absolute;
    font-family: 'PT Sans', sans-serif;
  }
  #catalog{
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 1440px;
  }
  h1{
    width: 111px;
    height: 41px;
    left: 88px;
    top: 32px;

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
  .card{
    position: absolute;
    width: 264px;
    height: 272px;
    left: 248px;
    top: 163px;
    background: #FFFFFF;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
</style>
