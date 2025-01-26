import * as HttpStatusCodes from "stoker/http-status-codes"
import { AnalyzeRoute } from "./url.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"
import { parse } from "@/lib/parse"
import { evaluate } from "@/lib/evaluate"

export const url: RouteHandler<AnalyzeRoute> = async (c: Context) => {
    const body = await c.req.json()

    const res = await fetch(body.url)

    const data = await res.text()

    const { p, title } = parse(data)

    const result = evaluate(p)

    const response = await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
        // prompt: prompt,
    
        messages: [
          {
            role: "user",
            content: `Summarize this for me :${p}`,
          },
        ],
      });

    return c.json({ response, result, title })

}