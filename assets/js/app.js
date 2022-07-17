
    import {createApp} from '../../node_modules/vue/dist/vue.esm-browser.prod.js';

    const appConfig = {
        data() {
            return {
                title: "Vue + NMP + GitHub",
                counter: 0
            }
        }
    }

    const app = createApp(appConfig);

    app.mount('#app');