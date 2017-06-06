<template>
  <header class="main-header">
    <a href="/" class="logo">
      <span class="logo-mini"><b>C</b>MF</span>
      <span class="logo-lg"><b>Core</b>CMF</span>
    </a>
    <nav class="navbar">
      <a class="toggle" @click="toggleClick"><i class="fa fa-sliders"></i></a>
      <el-menu default-active="1" class="menu-navbar" mode="horizontal">
        <el-menu-item index="1"> <i class="fa fa-archive"></i> 系统</el-menu-item>
        <el-menu-item index="2"> <i class="fa fa-archive"></i> CMS</el-menu-item>
        <el-menu-item index="3"> <i class="fa fa-archive"></i> 用户</el-menu-item>
      </el-menu>
    </nav>
  </header>
</template>
<script>
  export default {
    name: 'header',
    created() {
      this.initData()
    },
    methods: {
      toggleClick() {
        this.$emit('sidebar')
      },
      initData() {
        let _this = this
        let apiUrl = this.$store.state.mainData.apiUrl.topNav
        let thenFunction = function(Response) {
          console.log(Response.data)
        }

        let catchFunction = function(error) {
        }
        this.$store.dispatch('getData',{ 'url':apiUrl, thenFunction, catchFunction })
      }
    }
  }
</script>
<style lang="scss">
  .main-header{
    display: -webkit-flex;
    display: flex;
    flex: 0 0 auto;
    >.logo{
      flex: 0 0 auto;
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      width: 230px;
      min-width: 230px;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      font-weight: 300;
      overflow: hidden;
      transition: width 0.3s ease-in-out,min-width 0.3s ease-in-out;
      >.logo-mini{
        display: none;
      }
      >.logo-lg{
        display: block;
      }
    }
    >.navbar{
      flex: 1 0 auto;
      display: -webkit-flex;
      display: flex;
      min-height: 50px;
      border-radius: 0;
      border: none;
      >.toggle{
        padding: 9px;
        font-size: 22px;
        color: #fff;
        &:hover{
          background-color: #d73925;
        }
      }
      >.menu-navbar{
        >.el-menu-item{
          line-height: 50px!important;
          height: 50px!important;
          color: #fff;
          border-bottom: 2px solid transparent;
          &:hover{
            background-color: #d73925;
            border-bottom: 2px solid #fff;
          }
        }
      }
    }
  }
</style>
