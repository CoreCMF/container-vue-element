# builder-vue

> a vue admin packages

## Build Setup
```
npm install builder-vue-element -D
npm install builder-vue -D
npm install element-ui -D

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
## 数据结构（必须）（store.state.apiUrl返回的数据结构json）
1、在apiUrl下面增加 topNav(顶部导航通信地址)
```
{
  "apiUrl":{
    "topNav":"http://corecmf.dev/api/admin/nav/top"
  }
}
2、在config下面增加 topNavActive(默认激活顶部菜单)
```
{
  "config":{
    "topNavActive":"admin"
  }
}
```
3、apiUrl>topNav通信地址数据返回要求 例子如下:
  1、apiUrl 为侧栏数据通信地址
```
{
    "admin": {
        "name": "admin",
        "title": "系统",
        "icon": "fa fa-cog",
        "sort": 0,
        "apiUrl": "http://corecmf.dev/api/admin/nav/sidebar"
    },
    "cms": {
        "name": "cms",
        "title": "文章",
        "icon": "fa fa-archive",
        "sort": 1,
        "apiUrl": "http://corecmf.dev/api/cms/nav/sidebar"
    }
}
```
4、apiUrl>topNav => apiUrl 侧栏通信地址数据返回要求
 1、subMenus子菜单信息（可以多级）（包含subMenus的侧栏apiUrl、path自动失效）
 2、path 前端访问路径
 3、apiUrl访问见面数据通信地址
 4、侧栏通信apiurl数据结构要求（请到对应的buider索引组件插件查看）
```
{
    "0": {
        "title": "首页 Dashboard",
        "icon": "fa fa-dashboard",
        "path": "/admin/dashboard",
        "apiUrl": "http://corecmf.dev/api/admin/dashboard/dashboard"
    },
    "1": {
        "title": "系统功能",
        "icon": "fa fa-cog",
        "path": "",
        "apiUrl": null,
        "subMenus": {
            "2": {
                "title": "系统设置",
                "icon": "fa fa-wrench",
                "path": "/admin/system/system",
                "apiUrl": "http://corecmf.dev/api/admin/system/system"
            },
        }
    },

}
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
