import createApp from "@/lib/create-app"
import configureOpenAPI from "./lib/configure-openapi"
import index from "@/routes/index.routes"
import  analyze from "@/routes/analyze/analyze.index"
import url from "@/routes/url/url.index"
import ai from "@/routes/ai/ai.index"
const app = createApp()
configureOpenAPI(app)

const routes = [index,analyze,url, ai]

routes.forEach((route) => app.route("/", route))

export default app