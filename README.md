# builder-vue

> a vue admin packages

## Build Setup
```
npm install builder-vue-element -D
```
## 配置
1、引入builder-vue-element容器组件
```
import ContainerVueElement from 'container-vue-element'
Vue.use(ContainerVueElement)
```
2、在builder-vue vuex中配置 容器组件
```
store.state.container = { template: '<cve-layout/>' }
```
## 数据结构（必须）（store.state.apiUrl返回的数据结构JOSN）
1、在apiUrl下面增加 topNav(顶部导航通信地址)
```
{
  "apiUrl":{
    "logout":"http://corecmf.dev/admin/logout",
    "login":"http://corecmf.dev/admin/login",
    "topNav":"http://corecmf.dev/api/admin/nav/top"
  }
}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
