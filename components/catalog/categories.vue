<template>
  <nav id="categories">
    <ul>
      <li v-for="name in Categories">
        <NuxtLink :to="'/'+ name.name">{{name.name}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
    export default {
      name: "categories",
      data(){
        return{
          Categories:[{name:"Рюкзаки",}, {name: "Портфели",}, {name: "Сумки",},],
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
      width: 139.69px;
      font-family: 'PT Sans', sans-serif;
      font-weight: normal;
      font-size: 16px;
      line-height: 37px;
      padding: 0 0 16px 0;
      height: 21px;
      a{
        color:#959DAD;
        text-decoration: none;
        &:hover{
          color: #1F1F1F;
          text-decoration: underline;
          cursor: pointer;
        }
      }

    }
  }
  @media screen and  (max-width: 530px) {
    #categories {padding: 24px 0 0 20px;}
  }
</style>
