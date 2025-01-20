import * as HttpStatusCodes from "stoker/http-status-codes"
import { AiRoute } from "./ai.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"
import { evaluate } from "@/lib/evaluate"

export const ai: RouteHandler<AiRoute> = async (c: Context) => {
    const body = await c.req.json()

    if (!body.text) {
        return c.json({ error: "text is required" },
            HttpStatusCodes.BAD_REQUEST);
    }
    const result = evaluate(body.prompt)


    return c.json(result)

}