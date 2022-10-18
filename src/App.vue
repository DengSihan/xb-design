<template>
	<main
		class="mx-auto w-[720px] my-16">
		
		<xb-input
			name="username"
			placeholder="<i class='mdi mdi-account pr-2'></i>Account"
			:tips="[
				'please input your username'
			]"
			v-model="input.form.name"
			v-model:errors="input.errors.name"/>

		<xb-button>
			button
		</xb-button>

		<xb-button
			loading>
			button
		</xb-button>

		<xb-button
			disabled>
			button
		</xb-button>

		<xb-button
			scheme="danger">
			button
		</xb-button>

		<xb-button
			scheme="success">
			button
		</xb-button>

		<xb-button
			scheme="info">
			button
		</xb-button>

		<xb-select
			name="type"
			placeholder="<i class='mdi mdi-account pr-2'></i>Type"
			:tips="[
				'please select your account type'
			]"
			v-model="select.form.type"
			v-model:errors="select.errors.type">
			<option>
				Worker
			</option>
			<option>
				Driver
			</option>
			<option>
				Engineer
			</option>
		</xb-select>

	</main>
</template>

<script>
export default {

	data() {
		return {

			input: {
				form: {
					name: '',
				},
				errors: {
					name: [],
				},
			},

			select: {
				form: {
					type: null,
				},
				errors: {
					type: [],
				}
			}
		}
	}
}
</script>