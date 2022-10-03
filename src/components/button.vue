<style lang="scss">
	
	.xb-button {
		@apply p-3 rounded transition-transform duration-75 font-bold;

		&:not([disabled]) {
			@apply hover:scale-[101%] active:scale-[99%];
		}
		&[disabled] {
			@apply cursor-not-allowed opacity-50;
		}

		&.primary {
			@apply text-white bg-blue-600;
		}

		&.danger {
			@apply text-white bg-red-600;
		}

		&.success {
			@apply text-white bg-green-600;
		}

		&.info {
			@apply text-white bg-slate-600;
		}
	}

</style>

<template>
	<button
		class="xb-button"
		:class="[
			scheme,
		]"
		:disabled="computedDisabled"
		v-wave="!computedDisabled">

		<i
			v-if="loading"
			class="mdi mdi-loading mdi-spin pr-2"></i>

		<slot/>

	</button>
</template>

<script>
export default {

	name: 'xb-button',

	props: {
		loading: {
			required: false,
			type: Boolean,
			default: false,
		},
		disabled: {
			required: false,
			type: Boolean,
			default: false,
		},
		scheme: {
			required: false,
			type: String,
			default: 'primary',
			validator: scheme => {
				return ['primary', 'success', 'danger', 'info'].includes(scheme);
			},
		}
	},

	computed: {
		computedDisabled() {
			return this.disabled || this.loading;
		},
	}
}
</script>