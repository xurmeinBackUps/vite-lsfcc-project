import { coreRoutes } from "./modules/core.routes.js"
import { indexOnlyRoutes } from './modules/indexOnly.routes.js'
import { crudRoutes } from "./modules/CRUD.routes.js"

export const routes = [
  ...coreRoutes,
  ...indexOnlyRoutes,
  ...crudRoutes
]
