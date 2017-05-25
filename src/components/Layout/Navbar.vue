<template>
  <div class="layout-header">
    <a class="toggle" @click="toggleClick"><i class="fa fa-sliders"></i></a>
    <el-menu default-active="1" class="el-menu-navbar" mode="horizontal">
      <el-menu-item index="1"> <i class="fa fa-archive"></i> 系统</el-menu-item>
      <el-menu-item index="2"> <i class="fa fa-archive"></i> CMS</el-menu-item>
      <el-menu-item index="3"> <i class="fa fa-archive"></i> 用户</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    methods: {
      toggleClick() {
        console.log('test')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .layout-header{
    background-color: #dd4b39;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    display: -webkit-box;
  }
  .toggle{
    display: -webkit-box;
    padding: 9px;
    font-size: 22px;
    color: #fff;
    &:hover{
      background-color: #d73925;
      border-bottom: 2px solid #fff;
    }
  }
  .el-menu-item{
    line-height: 50px;
    height: 50px;
    color: #fff;
    border-bottom: 2px solid transparent;
    &:hover{
      background-color: #d73925;
      border-bottom: 2px solid #fff;
    }
  }
  .el-menu-item.is-active{
    border-bottom: 2px solid #fff;
  }
  .el-menu{
    background-color: #dd4b39;
  }
</style>
