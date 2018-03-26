<template>
    <el-menu
      :unique-opened="true"
      default-active=""
      class="sidebar-menu"
      :router="true"
      :collapse="isCollapse"
      background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
        <template v-for="(menu, key, index) in menus">
          <subMenu v-if="menu.subMenus" :data="menu" :index="key"/>
          <el-menu-item v-if="!menu.subMenus" :index="menu.path" class="top-menu-item">
            <i :class="menu.icon"></i><span slot="title"> {{ menu.title }}</span>
          </el-menu-item>
        </template>
    </el-menu>
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
        menus:null
      }
    },
    props: {
        isCollapse: {
            default: ''
        }
    },
    created() {
      this.initData()
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
        if (this.apiUrl) {
          let apiUrl = this.apiUrl
          let thenFunction = data => {
            this.menus = data.main.menus
          }
          this.$store.dispatch('getData',{ apiUrl, thenFunction })
        }
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
    top: 61px;
    bottom:0;
    overflow-x: hidden;
    z-index: 1001;
    transition: transform .3s ease-in-out,width 0.3s ease-in-out;
    @include scrollBar;
  }
</style>
