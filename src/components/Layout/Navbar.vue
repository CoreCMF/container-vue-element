<template>
  <div class="layout-header">
    <el-menu default-active="1" class="el-menu-navbar" mode="horizontal">
      <el-menu-item index="1"> <i class="fa fa-archive"></i> 系统</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'navbar'
  }
</script>
<style lang="scss" scoped>
  .layout-header{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .el-menu-item.is-active{
    border-bottom: 2px solid #20a0ff;
  }
  .el-menu{
    background-color: #fff;
  }
</style>
