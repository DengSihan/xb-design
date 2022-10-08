<style lang="scss">
	
	.xb-input-wrapper {
		@apply relative;

		input {
			@apply border border-2 p-3 w-full block rounded text-base placeholder-transparent outline-none;

			&:focus {
				@apply border-blue-600;

				& + label {
					@apply text-blue-600;
				}
			}

			&:focus + label,
			&:not(:placeholder-shown) + label {
				@apply text-sm -translate-y-2;
			}
		}

		label {
			@apply bg-white px-2 text-base absolute z-10 left-2 translate-y-4 cursor-text top-0 transition-[transform,text-color,font-size] duration-75;
		}

		p {
			@apply text-sm my-1 pl-6;

			span {
				@apply list-item;
			}
		}

		&.has-errors {
			input {
				@apply text-red-600 border-red-600;
			}

			label {
				@apply text-red-600;
			}
		}
	}

</style>

<template>
	
	<fieldset
		class="xb-input-wrapper"
		:class="{
			'has-errors': hasErrors
		}"
		v-bind="$attrsClassStyleIdOnly">
			
		<input
			:id="`${name}-input`"
			:aria-describedby="inputIsDescribedby"
			:placeholder="placeholder.html2text() || ' '"
			v-model="computedValue"
			v-bind="$attrsWithoutClassStyleId">

		<label
			:for="`${name}-input`"
			v-html="placeholder"/>

		<p
			v-if="hasTips && !hasErrors"
			class="text-slate-600"
			:id="`${name}-tips`">
			<span
				v-for="tip in tips"
				v-html="tip"/>
		</p>

		<p
			v-if="hasErrors"
			class="text-red-600"
			role="alert"
			:id="`${name}-errors`">
			<span
				v-for="error in errors"
				v-html="error"/>
		</p>

	</fieldset>

</template>

<script>
export default {

	name: 'xb-input',

	inheritAttrs: false,

	props: {
		modelValue: {
			required: true,
		},
		errors: {
			required: false,
			type: Array,
			default: () => [],
		},
		tips: {
			required: false,
			type: Array,
			default: () => [],
		},
		placeholder: {
			required: false,
			type: String,
			default: '',
		},
		name: {
			required: true,
			type: String,
		},
	},

	emits: [
		'update:modelValue',
		'update:errors',
	],

	computed: {
		computedValue: {
			get() {
				return this.modelValue;
			},
			set(value) {
				this.$emit('update:modelValue', value);
			}
		},
		computedErrors: {
			get() {
				return this.errors;
			},
			set(value) {
				this.$emit('update:errors', value);
			},
		},
		hasErrors() {
			return this.errors.length > 0;
		},
		hasTips() {
			return this.tips.length > 0;
		},
		inputIsDescribedby() {
			return [
					this.hasTips
						? `${this.name}-tips`
						: null,
					this.hasErrors
						? `${this.name}-errors`
						: null
				]
				.filter(i => i)
				.join(' ');
		}
	}
}
</script>