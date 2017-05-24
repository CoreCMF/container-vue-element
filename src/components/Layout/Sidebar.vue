<template>
    <el-menu default-active="1-4-1" theme="dark">
      <div class="layout-logo-left">CoreCMF 后台管理</div>
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
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
</template>
<script>
  export default {
    name: 'sidebar'
  }
</script>
<style lang="scss" scoped>
  @import  './../../assets/sass/mixin.scss';
  .layout-logo-left {
    background: #5b6270;
    border-radius: 3px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    margin: 15px auto;
    text-align: center;
    width: 90%;
  }
  .el-menu {
    position: fixed;
    width:200px;
    min-height: 100%;
    top: 0;
    bottom:0;
    overflow-x: hidden;
    @include scrollBar;
  }
</style>
