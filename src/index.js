import Layout from './components/Layout.vue'
import 'element-ui/lib/theme-default/index.css'

const components = [
  Layout
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component('cve-'+component.name, component)
  })
}

export default install
