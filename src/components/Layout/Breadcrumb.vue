<template>
  <div class="layout-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
  export default {
    name: 'cve-breadcrumb'
  }
</script>
<style lang="scss" scoped>
  .layout-breadcrumb{
    flex: 0 0 auto;
    padding: 20px 15px 0;
  }
</style>
