<template>
  <div>
    <navbar/>
    <div class="background">
      <catalog/>
    </div>
  </div>
</template>

<script>
  import Catalog from "~/components/catalog";
  export default {
    components: {Catalog}
  }
</script>

<style>
  body{
    margin:  0 0 !important;
  }
  .background{
    margin-left: auto;
    margin-right: auto;
    width: 1440px;
  }

</style>
