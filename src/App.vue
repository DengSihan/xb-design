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

		<xb-input
			type="file"
			name="avatar"
			placeholder="<i class='mdi mdi-account pr-2'></i>Avatar"
			:tips="[
				'please upload your avatar'
			]"
			v-model="input.form.avatar"
			v-model:errors="input.errors.avatar"/>

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

		<xb-textarea
			name="desc"
			placeholder="<i class='mdi mdi-account pr-2'></i>Desc"
			:tips="[
				'please input desc'
			]"
			v-model="textarea.form.desc"
			v-model:errors="textarea.errors.desc"/>

	</main>
</template>

<script>
export default {

	data() {
		return {

			input: {
				form: {
					name: '',
					avatar: '',
				},
				errors: {
					name: [],
					avatar: [],
				},
			},

			select: {
				form: {
					type: '',
				},
				errors: {
					type: [],
				}
			},

			textarea: {
				form: {
					desc: '',
				},
				errors: {
					desc: []
				}
			}
		}
	}
}
</script>