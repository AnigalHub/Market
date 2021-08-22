<template>
  <div id="catalog">
    <div class="flex-container">
      <h1>Каталог</h1>
      <div id="sort">Сортировать по:</div>
      <div id="price">цене</div>
      <svg id="arrow" width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
      </svg>
    </div>


    <nav id="categories" >
       <ul>
         <li v-for="name in Catalog"><a>{{name.name}}</a></li>
       </ul>
    </nav>



   </div>
</template>

<script>
    export default {
        name: "catalog",
      data(){
         return{
           Catalog:[
             {name:"Рюкзаки"},
             {name: "Футболки"},
             {name: "Рубашки"},
           ]
         }
      }
    }
</script>
<style>
  ul{
    margin-block-start: 0 !important;
  }
</style>
<style scoped lang="scss">
  h1{
    margin: 0 !important;
    width: 111px !important;
    height: 41px;
    padding: 32px 0 0 88px;
    font-family: 'PT Sans', sans-serif;
  }
  .flex-container{
    display: flex;
  }
  #sort{
    height: 21px;
    padding-left: 992px;
    font-size: 16px;
    line-height: 21px;
    float: left;
    display: flex;
    align-items: flex-end;
  }
  #price{
    width: 34px;
    height: 21px;
    padding-left: 6px;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
    color: #59606D;
  }
  #sort,#price{
    padding-top:42px;
    font-family: 'PT Sans', sans-serif;
  }
  nav{
    width: 161px;
    height: 95px;
    padding-left: 87px;
    padding-top: 24px;
    ul{
      margin-left: -40px !important;
    }
    li{
      color: #1F1F1F;
      width: 139.69px;
      font-family: 'PT Sans', sans-serif;
      font-weight: normal;
      font-size: 16px;
      line-height: 37px;
      display: flex;
      align-items: flex-end;
      padding-bottom: 16px;
      height: 21px;
      &:hover{
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

</style>
