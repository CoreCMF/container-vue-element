<template>
<div class="login-body">
  <div class="login-item">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
  import { forIn } from 'lodash'
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
        let token = this.callbackData.config.token
        if (token.status_code == 200) {
          forIn(token, (value, name) => {
            localStorage.setItem(name, value)
          })
          setTimeout(() =>  {
            this.$router.push({name:this.homeRouterNmae})
          }, 500);
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
