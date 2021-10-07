<template>
  <div id="sorting">
      <div class="dropdown">
      Сортировать по: {{sort}}  </div>
      <component :is="arrow"/>
      <div class="dropdown-content">
        <div @click="SortByPrice()">По цене</div>
        <div @click="SortByNamePopular()">По популярности</div>
      </div>

  </div>
</template>

<script>
  import Arrow_filterSVG from "~/components/svg/arrow_filter_svg";
    export default {
      name: "sorting",
      data() {
        return {
          sort:"цене",
          arrow: Arrow_filterSVG,
          Filter:[{name:"По цене"},{name:"По популярности"}],
        }
      },
      methods:{
        SortByPrice:function () {
          this.sort = "цене"
        },
        SortByNamePopular:function () {
          this.sort = "поп.."
        },
      }
    }
</script>

<style scoped lang="scss">
 #sorting{display: inherit;}
 #sort{
   padding: 0 0 0 992px;
   float: left;
 }
 .dropdown {
   float: left;
   height: 21px;
   border: none;
   margin-left: 992px;
   padding: 42px 5px 11px 0;
   font-size: 16px;
   line-height: 21px;
   position: relative;
   display: inline-block;
   cursor: pointer;
   font-family: 'PT Sans', sans-serif;
 }
 .dropdown-content div {
   font-family: 'PT Sans', sans-serif;
   border-radius: 4px;
   background: #FFFEFB;
 }
 .dropdown-content {
   //display: none;
   position: absolute;
   background: #FFFFFF;
   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
   border-radius: 8px;
   width: 160px;
   height: 68px;
   padding: 8px 0 12px;
   top: 69px;
   left: 1192px;
   cursor: pointer;
   z-index: 1;
   div{
     height: 26px;
     color:#959DAD;
     font-size: 16px;
     line-height: 21px;
     padding: 4px 0 4px 12px;
     &:hover{
       color: #1F1F1F;
       background: #F8F8F8;
       cursor: pointer;
     }
   }
 }
</style>
