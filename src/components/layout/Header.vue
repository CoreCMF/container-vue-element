<template>
  <header class="main-header">
    <a href="/" class="logo">
      <span class="logo-mini"><b>C</b>MF</span>
      <span class="logo-lg"><b>Core</b>CMF</span>
    </a>
    <nav class="navbar">
      <div class="left">
        <a class="toggle" @click="toggleClick"><i class="fa fa-sliders"></i></a>
        <el-menu v-if="show" :default-active="defaultActive" @select="handleSelect" class="menu-navbar" mode="horizontal">
          <el-menu-item v-for="topNav in topNavs" :key="topNav.name" :index="topNav.name"> <i :class="topNav.icon"></i> {{ topNav.title }}</el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <a class="loginOut" @click="loginOut">用户退出</a>
      </div>
    </nav>
  </header>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'cve-header',
    data() {
      return {
        topNavs:null,
        show:false,
      }
    },
    created() {
      this.initData()
    },
    computed: {
      ...mapState({
        loginRouterNmae: state => state.mainData.config.loginRouterNmae,
        topNavApiUrl: state => state.mainData.apiUrl.topNav,
        logoutApiUrl: state => state.mainData.apiUrl.logout,
        defaultActive: state => state.mainData.config.topNavActive,
      }),
    },
    methods: {
      toggleClick() {
        this.$emit('sidebar')
      },
      initData() {
        let _this = this
        let apiUrl = this.topNavApiUrl
        let thenFunction = function(Response) {
          _this.topNavs = Response.data.main.topNavs
          _this.show = true
          _this.handleSelect(_this.defaultActive)  //初始化时激活获取侧栏数据
        }
        this.$store.dispatch('getData',{ apiUrl, thenFunction })
      },
      /* 通过键值传递侧栏通信api url */
      handleSelect(key) {
        let apiUrl = this.topNavs[key].apiUrl
        this.$store.dispatch('setSidebar', apiUrl)
      },
      loginOut() {
          let _this = this
          let message = this.$message
          let apiUrl = this.logoutApiUrl
          let thenFunction = function(Response) {
            if (!Response.data.auth) {
              _this.$router.push({name:_this.loginRouterNmae})
            }
          }
          this.$store.dispatch('getData',{ apiUrl, thenFunction, message })
      }
    }
  }
</script>
<style lang="scss">
  .main-header{
    display: -webkit-flex;
    display: flex;
    flex: 0 0 auto;
    position: fixed;
    width: 100%;
    z-index: 1001;
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
      justify-content: space-between;
      >.left{
        display: -webkit-flex;
        display: flex;
        >.toggle{
          padding: 9px;
          font-size: 22px;
          color: #fff;
          &:hover{
            background-color: #d73925;
          }
        }
        >.menu-navbar{
          >.is-active{
            background-color: #d73925;
            border-bottom: 2px solid #fff;
          }
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
      .right{
        display: -webkit-flex;
        display: flex;
        >.loginOut{
          padding: 15px;
          color: #fff;
          &:hover{
            background-color: #d73925;
          }
        }
      }

    }
  }
</style>
