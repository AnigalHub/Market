<template>
  <div id="catalog">
    <div class="flex-container">
      <h1>Каталог</h1>
      <sorting/>
    </div>
    <div class="flex-container">
      <categories/>
      <products/>
    </div>
   </div>
</template>

<script>
  import Products from "~/components/catalog/products";
  import Categories from "~/components/catalog/categories";
  import Sorting from "~/components/catalog/sorting";
    export default {
      name: "catalog",
      components: {Sorting, Categories, Products},
    }
</script>
<style>
  ul{margin-block-start: 0 !important;}
</style>
<style scoped lang="scss">
  #catalog{position: relative;}
  h1{
    width: 111px !important;
    height: 41px;
    padding: 32px 0 0 88px;
    font-family: 'PT Sans', sans-serif;
  }

</style>
