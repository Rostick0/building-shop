
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './app/router'
import directives from '@/app/directives';

const app = createApp(App)

directives.forEach(directive => {
    app.directive(directive.name, directive)
});

app
    .use(createPinia())
    .use(router)

app.mount('#app')
