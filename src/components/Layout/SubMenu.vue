<template>
  <el-submenu :index="index.toString()">
      <template slot="title"><i :class="data.icon"></i><span> {{ data.title }}</span></template>
      <template v-for="(menu, key, index) in data.subMenus">
        <subMenu v-if="menu.subMenus" :data="menu" :index="key"/>
        <el-menu-item v-if="!menu.subMenus" :index="menu.path">
          <i :class="menu.icon"></i><span> {{ menu.title }}</span>
        </el-menu-item>
      </template>
  </el-submenu>
</template>
<script>
  export default {
    name: 'cve-sidebar',
    beforeCreate: function () {
      this.$options.components.subMenu = require('./SubMenu.vue')
    },
    props: {
        data: {
            type: Object,
            default: ''
        },
        index: {
            default: ''
        },
    },
    methods: {

    }
  }
</script>
<style lang="scss">

</style>
