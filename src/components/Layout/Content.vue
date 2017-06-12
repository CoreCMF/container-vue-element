<template>
<div class="layout-content">
  <router-view></router-view>
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
  }
</style>
