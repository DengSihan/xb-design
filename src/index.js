import '~/assets/library.scss';
import '~/extends.js';

import components from '~/components/index.js';
import globalMixin from '~/mixins/global.js';

import ClickOutside from 'click-outside-vue3';
import VWave from 'v-wave';
import FloatingVue from 'floating-vue';

const xiangdui = {
	install(app) {

		app.config.unwrapInjectedRef = true;

		// add thrid part plugins
		app.use(ClickOutside)
			.use(VWave, {
				color: 'currentColor',
			})
			.use(FloatingVue);

		app.mixin(globalMixin);

		// add components
		for (const prop in components) {
			if (components.hasOwnProperty(prop)) {
				let component = components[prop];
				app.component(component.name, component);
			}
		}
	}
}

export default xiangdui;
