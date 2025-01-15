import { createRouter } from "@/lib/create-app"
import  * as handlers from "./url.handlers"
import * as routes from "./url.routes"

const router = createRouter().openapi(routes.url, handlers.url)

export default router