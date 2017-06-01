<template>
  <div class="layout" :class="{ hideSidebar: isSidebar }">
    <div class="layout-sidebar-left">
      <layout-sidebar/>
    </div>
    <div class="layout-right">
      <layout-navbar  v-on:sidebar="toggleClick"/>
      <layout-breadcrumb/>
      <layout-content/>
      <layout-footer/>
    </div>
  </div>
</template>
<script>
  import layoutSidebar    from './Layout/Sidebar.vue'
  import layoutNavbar     from './Layout/Navbar.vue'
  import layoutBreadcrumb from './Layout/Breadcrumb.vue'
  import layoutContent    from './Layout/Content.vue'
  import layoutFooter     from './Layout/Footer.vue'
  export default {
    name: 'layout',
    components: {
      layoutSidebar,
      layoutNavbar,
      layoutBreadcrumb,
      layoutContent,
      layoutFooter
    },
    data() {
      return {
        isSidebar:false
      }
    },
    methods: {
      toggleClick() {
        this.isSidebar = !this.isSidebar
      }
    }
  }
</script>
<style lang="scss">
  body{
    margin: 0;
  }
  .layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    /* 收缩侧栏后的样式begin */
    &.hideSidebar {
      >.layout-sidebar-left {
        width: 50px;
        >.sidebar-container {
          >.el-menu--dark {
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
                  width: 150px;
                  left: 50px;
                  padding-top: 5px;
                  padding-bottom: 5px;
                  border-bottom-right-radius: 4px;
                }
              }
            }
            overflow-x:visible;
          }
          >.layout-logo-lg{
            display: none;
          }
          >.layout-logo-mini{
            display: block;
          }
          >.sidebar-menu {
            width:50px;
          }
        }
      }
    }
    /* 收缩侧栏后的样式end */
  }
  .layout-sidebar-left{
    width: 230px;
  }
  .layout-right{
    -moz-box-flex:1.0;
    -webkit-box-flex: 1.0;
    width: 100%;
  }
  </style>
