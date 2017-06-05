<template>
  <div class="layout-content">
    <div class="layout-content-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'content'
  }
</script>
<style lang="scss" scoped>
  .layout-content{
    flex: 1 0 auto;
    min-height: 300px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
</style>
