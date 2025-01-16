import { createRouter } from "@/lib/create-app"
import  * as handlers from "./ai.handlers"
import * as routes from "./ai.routes"

const router = createRouter().openapi(routes.ai, handlers.ai)

export default router