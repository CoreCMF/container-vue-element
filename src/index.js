import Layout from './components/Layout.vue'
import Login from './components/login.vue'
import 'element-ui/lib/theme-default/index.css'

const components = [
  Layout,
  Login
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default install
