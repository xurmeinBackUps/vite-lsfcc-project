import vueMaterialAdapter from 'vue-material-adapter'

export default function $vma() {
	return {
		name: '$vma',
		install: (app) => {
			return app.use(vueMaterialAdapter)
		}
	}
}
