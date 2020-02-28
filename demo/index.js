import ColorPicker from '..'
import Vue from 'vue'
Vue.use(ColorPicker)
new Vue({ render: h => h('color-picker') }).$mount('#app')
