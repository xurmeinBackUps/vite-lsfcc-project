import { coreRoutes } from "./core.routes.js"
import { categoryRoutes } from './category.routes.js'
import { transRoutes } from './trans.routes'
import { blogRoutes } from "./blog.routes.js"

export const routes = [
  ...coreRoutes,
  ...categoryRoutes,
  ...transRoutes,
  ...blogRoutes
]
