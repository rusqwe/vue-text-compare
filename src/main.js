import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Editor from 'primevue/editor';
//import CdisoftLibrary from "cdisoft-library/src";

import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import 'primeflex/primeflex.css';

router.beforeEach(
    (to, from, next) => {
        window.scrollTo(0, 0);
        document.title = to.meta.title
        if (to.meta.description) {
            const meta = document.head.querySelector('meta[name="description"]');
            if (meta)
                meta.setAttribute('content', to.meta.description);
        }
        next()
    }
)

const app = createApp(App).use(store).use(router).use(PrimeVue);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('Editor', Editor);
app.mount('#app')