import { createApp } from 'vue'
import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
// se voglio importo qui scss
import App from './App.vue'



// createApp(App).use(router).mount('#app')
// oppure (uguale) :

const app = createApp(App);
app.use(router);
app.mount("#app");
