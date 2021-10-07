<template>
  <nav id="categories">
    <ul>
      <li v-for="name in Categories"><a>{{name.name}}</a></li>
    </ul>
  </nav>
</template>

<script>
    export default {
      name: "categories",
      data(){
        return{
          Categories:[{name:"Рюкзаки"}, {name: "Футболки"}, {name: "Рубашки"},],
        }
      }
    }
</script>

<style scoped lang="scss">
  #categories{
    width: 161px;
    height: 95px;
    padding: 24px 0 0 87px;
    li{
      color: #1F1F1F;
      width: 139.69px;
      font-family: 'PT Sans', sans-serif;
      font-weight: normal;
      font-size: 16px;
      line-height: 37px;
      padding: 0 0 16px 0;
      height: 21px;
      &:hover{
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  @media screen and  (max-width: 530px) {
    #categories {padding: 24px 0 0 20px;}
  }
</style>
