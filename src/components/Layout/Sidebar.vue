<template>
  <el-menu :unique-opened="true" default-active="" theme="dark" class="sidebar-menu" :router="true">
      <template v-for="(menu, key, index) in menus">
        <subMenu v-if="menu.subMenus" :data="menu"/>
        <el-menu-item v-if="!menu.subMenus" :index="menu.path" class="top-menu-item">
          <i :class="menu.icon"></i><span> {{ menu.title }}</span>
        </el-menu-item>
      </template>
  </el-menu>
</template>
<script>
  import { mapState } from 'vuex'
  import subMenu from './SubMenu.vue'
  export default {
    name: 'cve-sidebar',
    components: {
        subMenu
    },
    data() {
      return {
        menus:null,
      }
    },
    watch: {
      apiUrl:'initData'
    },
    computed: {
      ...mapState({
        apiUrl: state => state.api.sidebar,
      }),
    },
    methods: {
      initData(){
        let _this = this
        let apiUrl = this.apiUrl
        let thenFunction = function(Response) {
          _this.menus = Response.data.main.menus
        }
        this.$store.dispatch('getData',{ apiUrl, thenFunction })
      }
    }
  }
</script>
<style lang="scss">
  @import  './../../assets/sass/mixin.scss';
  .sidebar-menu {
    position: fixed!important;
    width:230px;
    min-height: 100%;
    top: 50px;
    bottom:0;
    overflow-x: hidden;
    z-index: 1001;
    transition: transform .3s ease-in-out,width 0.3s ease-in-out;
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
    >.top-menu-item{
      >i{
        margin-left: -5px;
      }
      &.is-active{
        border-left-color: #dd4b39;
      }
    }
  }
  .el-submenu__title{
    height: 44px!important;
    line-height: 44px!important;
    >i{
      margin-left: -5px;
    }
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
