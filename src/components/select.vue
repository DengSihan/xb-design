<style lang="scss">
	
	.xb-select-wrapper {
		@apply relative;

		select {

			-webkit-appearance: none;

			@apply border border-2 pt-3 pb-2 px-3 w-full block rounded placeholder-transparent outline-none;

			&:focus {
				@apply border-blue-600;

				& + label {
					@apply text-blue-600;
				}
			}

			&:focus + label,
			&:not(:placeholder-shown) + label {
				@apply scale-[75%] -translate-y-2;
			}

			&.value-null {
				@apply text-slate-400;
			}

			option:not([disabled]) {
				@apply text-black;
			}
		}

		label {
			@apply bg-white px-2 text-base absolute z-10 left-2 translate-y-3 cursor-text top-0 transition-[transform,text-color] duration-75 origin-[center_left];
		}

		.actions-container {
			@apply absolute w-10 h-10 block right-1 top-1 translate-y-0 flex items-center justify-center;
		}

		p {
			@apply text-xs my-1 list-none;

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
		class="xb-select-wrapper"
		:class="{
			'has-errors': hasErrors
		}"
		v-bind="$attrsClassStyleIdOnly">

		<select
			:id="`${name}-select`"
			:class="{
				'value-null': !!!computedValue
			}"
			:aria-describedby="inputIsDescribedby"
			:placeholder="placeholder.html2text() || ' '"
			:disabled="disabled"
			v-model="computedValue"
			v-bind="$attrsWithoutClassStyleId">

			<option
				v-if="hasPlaceholder"
				:value="null"
				disabled
				selected
				class="text-slate-300"
				v-html="placeholder"/>

			<slot/>

		</select>

		<label
			:for="`${name}-select`"
			v-html="placeholder"/>

		<span
			class="actions-container">
			<button
				class="w-5 h-5 text-lg flex items-center"
				aria-label="清空选择框"
				v-if="computedValue"
				type="button"
				@click="computedValue = null"
				:disabled="disabled">
				<i
					class="mdi mdi-close"></i>
			</button>
			<button
				class="w-5 h-5 text-lg flex items-center"
				aria-label="选择"
				v-else-if="!!!computedValue"
				:disabled="disabled"
				type="button">
				<i
					class="mdi mdi-chevron-down"></i>
			</button>
		</span>

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

	name: 'xb-select',

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
		disabled: {
			required: false,
			type: Boolean,
			default: false,
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
		hasPlaceholder () {
			return !!this.placeholder;
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

