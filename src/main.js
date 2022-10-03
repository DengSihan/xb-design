import '~/assets/index.scss';

// @mdi/font
import '@mdi/font/css/materialdesignicons.min.css';

import { createApp } from 'vue';
import App from '~/App.vue';

import xiangdui from '~/index.js';

const app = createApp(App)
	.use(xiangdui)
	.mount('#app');