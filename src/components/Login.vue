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
    computed: {
      callbackData() {
        return this.$store.state.callbackData
      },
      homeRouterNmae() {
        return this.$store.state.mainData.config.homeRouterNmae
      }
    },
    watch: {
      callbackData: 'thenFunction'
    },
    methods: {
      thenFunction() {
        if (this.callbackData.state) {
          setTimeout(() =>  {
            this.$router.push({name:this.homeRouterNmae})
          }, 3000);
        }
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
