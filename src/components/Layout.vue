<template>
  <div class="wrapper skin-red" :class="{ hideSidebar: hideSidebar, openSidebar: openSidebar }">
    <layoutHeader @sidebar="toggleClick"/>
    <layoutSidebar :isCollapse="isCollapse"/>
    <div class="layout-container" @click="closeSidebar">
        <el-container>
          <!-- <el-header><layout-breadcrumb/></el-header> -->
          <el-main class="layout-main"><layout-content/></el-main>
          <el-footer><layout-footer/></el-footer>
        </el-container>
      </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import layoutHeader    from './Layout/Header.vue'
  import layoutSidebar    from './Layout/Sidebar.vue'
  import layoutBreadcrumb from './Layout/Breadcrumb.vue'
  import layoutContent    from './Layout/Content.vue'
  import layoutFooter     from './Layout/Footer.vue'
  export default {
    name: 'cve-layout',
    components: {
      layoutHeader,
      layoutSidebar,
      layoutBreadcrumb,
      layoutContent,
      layoutFooter
    },
    data() {
      return {
        collapseScreenSize:768,
        hideSidebar:false,
        openSidebar:false,
        isCollapse:false,
      }
    },
    computed: {
      ...mapState({
        callbackError: 'callbackError',
        loginRouterNmae: state => state.mainData.config.loginRouterNmae,
        authCheckApiUrl: state => state.mainData.apiUrl.authCheck
      }),
    },
    watch: {
      callbackError: 'authCheck'
    },
    methods: {
      authCheck() {
          /**
           * [thenFunction 如果登录没有成功跳转到登录页面]
           */
          let _this = this
          let message = this.$message
          let thenFunction = (Response) => {
            if (!Response.data.auth) {
              _this.$router.push({name:_this.loginRouterNmae})
            }
          }
          let catchFunction = (error) => {
            _this.$router.push({name:_this.loginRouterNmae})
          }
          let apiUrl = this.authCheckApiUrl
          this.$store.dispatch('getData',{ apiUrl, thenFunction, message, catchFunction})
      },
      /* [toggleClick 根据屏幕宽度 折叠或者收缩侧栏] */
      toggleClick() {
        let offsetWidth = document.body.offsetWidth;
        if (offsetWidth > this.collapseScreenSize) {
          this.hideSidebar = !this.hideSidebar
          this.isCollapse = this.hideSidebar? true :false
        }else{
          this.isCollapse = false
          this.openSidebar = !this.openSidebar
        }
      },
      /* [closeSidebar 关闭侧栏] */
      closeSidebar() {
        this.openSidebar = false
      }
    }
  }
</script>
<style lang="scss">
  @import  './../assets/sass/mixin.scss';
  body{
    margin: 0;
    background: #f5f7f9;
  }
  a{
    text-decoration: none;
  }
  .wrapper{
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
  }
  .layout-container{
    margin-top:61px;
    flex: 1 0 auto;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    margin-left: 230px;
    transition: transform .3s ease-in-out,margin-left 0.3s ease-in-out;
  }
  .layout-main{
    min-height: 275px;
  }
  .skin-red{
    >.main-header{
      background-color: #dd4b39;
      >.logo{
        background-color: #d73925;
        color: #fff;
        border-bottom: 0 solid transparent;
      }
      >.navbar{
        background-color: #dd4b39;
        >.menu-navbar{
          background-color: #dd4b39;
        }
      }
    }
  }
  @media (min-width: $screen-xs-max) {
    /* 收缩侧栏后的样式begin */
    .hideSidebar {
      >.main-header{
        >.logo{
          width: 65px!important;
          min-width: 65px!important;
          >.logo-mini{
            display: block!important;
          }
          >.logo-lg{
            display: none!important;
          }
        }
      }
      >.sidebar-menu {
        width:65px;
        overflow-x:visible;
      }
      >.layout-container{
        margin-left: 65px;
      }
    }
    /* 收缩侧栏后的样式end */
  }
  @media (max-width: $screen-xs-max) {
    .sidebar-menu{
      top: 122px!important;
      transform: translate(-230px, 0);
    }
    .layout-container{
      margin-top:122px;
      margin-left: 0;
    }
    .main-header{
      flex-direction: column;
      >.logo{
        width: 100%!important;
      }
    }
    /* 收缩侧栏后的样式begin */
    .openSidebar {
      >.sidebar-menu{
        top: 122px;
        transform: translate( 0, 0);
      }
      .layout-container{
        transform: translate(230px, 0);
      }
    }
    /* 收缩侧栏后的样式end */
  }
</style>
