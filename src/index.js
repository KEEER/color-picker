import MTextField from '@keeer/material-components-vue/components/text-field'
import ColorPicker from './ColorPicker.vue'

const plugin = {
  install (vm) {
    vm.use(MTextField)
    vm.component('color-picker', ColorPicker)
  },
}
export default plugin
