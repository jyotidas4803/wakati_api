import { RouteHandler } from "@hono/zod-openapi"
import { Context } from "hono"
import { AnalyzeRoute } from "./analyze.routes"

export const analyze: RouteHandler<AnalyzeRoute> = async (c: Context) => {
    const body = await c.req.json()

    return c.json({ message: parse(body.text) })
}
function parse(text: string) {
    return text.toUpperCase()
}

