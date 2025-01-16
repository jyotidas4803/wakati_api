import { createRoute, z } from '@hono/zod-openapi'
import { createRouter } from "@/lib/create-app"
import * as HttpStatusCodes from "stoker/http-status-codes"

const router = createRouter().openapi(createRoute({
    path: "/get",
    method: "get",
    responses: {
        [HttpStatusCodes.OK]: {
            content: {
                "application/json": {
                    schema: z.object({
                        message: z.string()
                    }),
                },
            }, description: "Re"
        },
    },
}), (c) => {
    return c.json({ message: "API is active" })
})

export default router