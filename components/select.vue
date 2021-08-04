<template>
    <div>
      <div id="order">
        <div id="sort">Сортировать по:</div>
        <div id="price">цене</div>
        <svg id="arrow" width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
        </svg>
      </div>
    </div>
</template>

<script>
    export default {
        name: "select"
    }
</script>

<style scoped>
  #sort{
    height: 21px;
    top:42px;
    left: 1191px;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
  }
  #price{
    width: 34px;
    height: 21px;
    left: 1309px;
    top: 42px;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
    color: #59606D;
  }
  #sort,#price{
    position: absolute;
    font-family: 'PT Sans', sans-serif;
  }
</style>
