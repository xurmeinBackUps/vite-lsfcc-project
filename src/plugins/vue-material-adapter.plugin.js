import vueMaterialAdapter from 'vue-material-adapter'
import 'material-components-web/dist/material-components-web.min.css';
// import 'material-components-web/dist/material-components-web.js.css';

const vma = {

		install: (app) => {
			return app.use(vueMaterialAdapter)
		}
	
}

export {$vma}