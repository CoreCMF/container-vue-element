<template>
  <div class="sidebar-container">
    <div class="layout-logo-lg">CoreCMF</div>
    <div class="layout-logo-mini">Core</div>
    <el-menu default-active="1-4-1" theme="dark" class="sidebar-menu">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i><span>Dashboard</span></template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'sidebar'
  }
</script>
<style lang="scss">
  @import  './../../assets/sass/mixin.scss';
  .layout-logo-lg {
    background-color: #d73925;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    width: 100%;
  }
  .layout-logo-mini {
    background-color: #d73925;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    width: 100%;
    display: none;
  }
  .sidebar-menu {
    position: fixed;
    width:230px;
    min-height: 100%;
    top: 50px;
    bottom:0;
    overflow-x: hidden;
    transition: transform .3s ease-in-out,width .3s ease-in-out;
    @include scrollBar;
  }
  /** 对饿了么菜单框架配色进行调整bengin **/
  .el-menu {
    border-radius: 0px;
  }
  .el-menu--dark{
    background-color: #222d32!important;
    >.is-active{
      >.el-submenu__title{
        border-left-color: #dd4b39;
      }
    }
  }
  .el-submenu__title{
    height: 44px!important;
    line-height: 44px!important;
  }
  .el-menu-item{
    height: 44px!important;
    line-height: 44px!important;
  }
  .el-menu--dark .el-submenu .el-menu{
    background-color: #2c3b41!important;
  }
  .el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title{
    border-left: 3px solid transparent;
    color: #b8c7ce;
  }
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
    color:#fff;
  }
  /** 对饿了么菜单框架配色进行调整end **/
</style>
