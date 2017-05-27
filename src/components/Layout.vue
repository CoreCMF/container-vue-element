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
    &.hideSidebar {
      >.layout-sidebar-left {
        width: 50px;
        >.sidebar-container {
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
  }
  .layout-sidebar-left{
    width: 200px;
  }
  .layout-right{
    -moz-box-flex:1.0;
    -webkit-box-flex: 1.0;
    width: 100%;
  }
  </style>
