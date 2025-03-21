import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
import App from './App2.vue'
import CheckboxItem from './components/CheckboxItem.vue'

createApp(App)
    .component('checkbox-item', CheckboxItem)
    .mount('#app')
