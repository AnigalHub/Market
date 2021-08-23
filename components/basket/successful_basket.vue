<template>
  <div id="successful_basket">
    <component id="ok":is="ok"/>
    <div id="successful">Заявка успешно отправлена</div>
    <div id="connection_text">Вскоре наш менеджер свяжется с Вами</div>
  </div>
</template>

<script>
  import OkSVG from "~/components/svg/ok_svg";
    export default {
        name: "successful_basket",
      data() {
        return {
          ok: OkSVG,
        }
      }
    }
</script>

<style scoped lang="scss">
  #successful_basket{
    #ok{
      padding: 366px 190px 24px;
    }
    #successful{
      width: 297px;
      height: 31px;
      font-weight: bold;
      font-size: 24px;
      line-height: 31px;
      padding-left: 81px;
      padding-right: 82px;
    }
    #connection_text{
      font-size: 16px;
      line-height: 21px;
      padding: 2px 92px 0;
    }
    #successful, #connection_text{
      font-family: 'PT Sans', sans-serif;
      text-align: center;
    }
  }
</style>
