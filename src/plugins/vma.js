import VueMaterialAdapter from "vue-material-adapter";
import 'material-components-web/dist/material-components-web.min.css';
import 'material-components-web/dist/material-components-web.min.js';

export default {
  install: (app) => {
    app.use(VueMaterialAdapter)
  }
}
