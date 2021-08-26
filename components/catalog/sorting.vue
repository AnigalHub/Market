<template>
  <div id="sorting">
    <div id="sort">Сортировать по:</div>
    <div id="name_sort">цене</div>
    <component :is="arrow"/>
    <div id="filter">
      <nav>
        <ul>
          <li v-for="name in Filter"><a>{{name.name}}</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  import Arrow_filterSVG from "~/components/svg/arrow_filter_svg";
    export default {
      name: "sorting",
      data() {
        return {
          arrow: Arrow_filterSVG,
          Filter:[{name:"По цене"},{name:"По популярности"}],
        }
      }
    }
</script>

<style scoped lang="scss">
 #sorting{display: inherit;}
 #sort{
   padding: 0 0 0 992px;
   float: left;
 }
 #name_sort{
   width: 34px;
   padding: 0 0 0 6px;
   color: #59606D;
 }
 #sort,#name_sort{
   height: 21px;
   padding-top:42px;
   font-size: 16px;
   line-height: 21px;
   display: flex;
   align-items: flex-end;
   font-family: 'PT Sans', sans-serif;
 }
 #filter{
   width: 160px;
   height: 68px;
   position: absolute;
   right: 88px;
   top: 69px;
   padding: 8px 0 12px;
   background: #FFFFFF;
   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
   border-radius: 8px;
   li{
     height: 26px;
     padding: 4px 0 4px 12px;
     &:hover{
       background: #F8F8F8;
       cursor: pointer;
     }
   }
 }
</style>
