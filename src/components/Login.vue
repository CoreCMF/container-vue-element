<template>
<div class="login-body">
  <div class="login-item">
    <bve-index/>
  </div>
</div>
</template>
<script>
  export default {
    name: 'cve-login',
    data() {
      return {
        data: null,
      }
    },
    computed: {
      apiUrl() {
        return this.$route.meta.apiUrl
      }
    },
    created () {
      // this.initData()
    },
    watch: {
      // apiUrl: 'initData',
    },
    methods: {
      initData() {
        let _this = this
        let apiUrl = this.apiUrl
        let thenFunction = function(Response) {
          _this.data = Response.data
          console.log(_this.data);
        }
        this.$store.dispatch('getData',{ apiUrl, thenFunction})
      }
    }
  }
</script>
<style lang="scss">
.login-body{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #20A0FF;
  position:absolute;
  width: 100%;
  height:100%;
}
.login-item{
  margin-bottom: 6.18%;
}
</style>
