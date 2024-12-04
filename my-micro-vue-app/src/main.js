import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'


let instance = null


function render(props = {}) {
    const { container } = props


    instance = createApp(App)
    instance.use(router)
    instance.use(createPinia())
    instance.mount(container ? container.querySelector('#app-Container') : document.getElementById("app-Container"))
    if (qiankunWindow.__POWERED_BY_QIANKUN__) {
        console.log('我正在作为子应用运行')
    }
}

// some code
renderWithQiankun({
    bootstrap() {
        console.log('bootstrap')
    },
    mount(props) {
        console.log('viteapp mount')
        render(props)
        // console.log(instance.config.globalProperties.$route,333);
    },
    unmount() {
        console.log('vite被卸载了')
        instance.unmount();
        instance = null;
    }
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({})
}
