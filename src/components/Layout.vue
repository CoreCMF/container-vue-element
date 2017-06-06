<template>
  <div class="wrapper skin-red" :class="{ hideSidebar: hideSidebar, openSidebar: openSidebar }">
    <layoutHeader v-on:sidebar="toggleClick"/>
    <layoutSidebar/>
    <div class="layout-main" @click="closeSidebar">
      <layout-breadcrumb/>
      <layout-content/>
      <layout-footer/>
    </div>
  </div>
</template>
<script>
  import layoutHeader    from './Layout/Header.vue'
  import layoutSidebar    from './Layout/Sidebar.vue'
  import layoutBreadcrumb from './Layout/Breadcrumb.vue'
  import layoutContent    from './Layout/Content.vue'
  import layoutFooter     from './Layout/Footer.vue'
  export default {
    name: 'layout',
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
      }
    },
    methods: {
      /* [toggleClick 根据屏幕宽度 折叠或者收缩侧栏] */
      toggleClick() {
        let offsetWidth = document.body.offsetWidth;
        if (offsetWidth > this.collapseScreenSize) {
          this.hideSidebar = !this.hideSidebar
        }else{
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
  .layout-main{
    flex: 1 0 auto;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    margin-left: 230px;
    transition: transform .3s ease-in-out,margin-left 0.3s ease-in-out;
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
          width: 50px;
          min-width: 50px;
          >.logo-mini{
            display: block;
          }
          >.logo-lg{
            display: none;
          }
        }
      }
      >.sidebar-menu {
        width:50px;
        overflow-x:visible;
        >.el-submenu{
          >.el-submenu__title{
            >span{
              display: none;
            }
            >.el-submenu__icon-arrow{
              display: none;
            }
            display: -webkit-box;
          }
          >.el-menu{
            display: none !important;
          }
          &:hover{
            >.el-submenu__title{
              >span{
                margin-left: 22px;
                -moz-box-flex:1.0;
                -webkit-box-flex: 1.0;
                display: block;
              }
              >.el-submenu__icon-arrow{
                padding-top: 5px;
                display: block;
              }
              background-color: #222d32;
              width: 230px;
              border-top-right-radius: 4px;
            }
            >.el-menu{
              display: block !important;
              position: absolute;
              width: 180px;
              left: 50px;
              padding-top: 5px;
              padding-bottom: 5px;
              border-bottom-right-radius: 4px;
            }
          }
        }
      }
      >.layout-main{
        margin-left: 50px;
      }
    }
    /* 收缩侧栏后的样式end */
  }
  @media (max-width: $screen-xs-max) {
    .sidebar-menu{
      top: 100px!important;
      transform: translate(-230px, 0);
    }
    .layout-main{
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
        top: 100px;
        transform: translate( 0, 0);
      }
      .layout-main{
        transform: translate(230px, 0);
      }
    }
    /* 收缩侧栏后的样式end */
  }
</style>
