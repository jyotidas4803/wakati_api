import * as HttpStatusCodes from "stoker/http-status-codes"
import { AiRoute } from "./ai.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"
import { evaluate } from "@/lib/evaluate"

export const ai: RouteHandler<AiRoute> = async (c: Context) => {
    const body = await c.req.json()

    const {prompt} = body
    // const result = evaluate(body.prompt)

    const respone =await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct-fast",{
       message:[{
        role:"system",
        content:"You are a helpful assistant that answers questions based on the provided context."
       },
       {
        role:"user",
        content:prompt
       
       },
    ]
    });

    return c.json(respone)

}