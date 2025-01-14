import { createRouter } from "@/lib/create-app"

import * as routes from "./analyze.routes"
import * as handlers from "./analyze.handlers"

const router = createRouter().openapi(routes.analyse, handlers.analyze)


export default router