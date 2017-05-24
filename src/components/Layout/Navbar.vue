<template>
  <div class="layout-header">
    <span class="toggle" @click="toggleClick"><i class="fa fa-sliders"></i></span>
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
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    display: -webkit-box;
  }
  .toggle{
    display: -webkit-box;
    margin: 15px;
    font-size: 22px;
    :hover{
      color: #20a0ff;
    }
  }
  .el-menu-item{
    border-bottom: 2px solid transparent;
  }
  .el-menu-item.is-active{
    border-bottom: 2px solid #20a0ff;
  }
  .el-menu-item:hover{
    border-bottom: 2px solid #20a0ff;
  }
  .el-menu{
    background-color: #fff;
  }
</style>
