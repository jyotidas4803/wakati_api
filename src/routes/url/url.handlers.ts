import * as HttpStatusCodes from "stoker/http-status-codes"
import { AnalyzeRoute } from "./url.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"
import { parse } from "@/lib/parse"

export const url: RouteHandler<AnalyzeRoute> = async (c: Context) => {
    const body = await c.req.json()
    const res= await fetch(body.url)
    const text = await res.text()
    const title = parse(text)
    return c.json({ message: title })
    // const title = parse(body.url)


    // return c.json({ message: body.url })

}