<template>
  <div class="layout ">
    <div class="layout-menu-left">
      <layout-sidebar/>
    </div>
    <div class="layout-right">
      <layout-navbar/>
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
    &.hideSidebar {
      >.layout-menu-left {
        width: 50px;
        >.sidebar-container {
          width:50px;
        }
      }
    }
  }
  .layout-menu-left{
    width: 200px;
  }
  .layout-right{
    -moz-box-flex:1.0;
    -webkit-box-flex: 1.0;
    width: 100%;
  }
  </style>
