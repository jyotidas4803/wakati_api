import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";

export const ai = createRoute({
  path: "/ai",
  method: "post",
  tags: ["Ai"],
  description: "enables advanced AI-driven analysis and processing of data such as text classification, sentiment analysis and providing powerful insights and automation for your data.",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            prompt: z.string().min(1),
          }),
        },
      },
    },
  },
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        "application/json": {
          schema: z.object({}),
        },
      },
      description: " Analyze text based on different algorithmic rules",
    },
    [HttpStatusCodes.BAD_REQUEST]: {
      content: {
        "application/json": {
          schema: z.object({}),
        },
      },
      description: "Bad request",
    },
  },
});

export type AiRoute = typeof ai;