
import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from "stoker/middlewares"
import logger from "../middleware/logger"
import { cloudflareRateLimiter } from "@hono-rate-limiter/cloudflare"

type AppType = {
    Variables: {
      rateLimit: boolean;
    };
    Bindings: {
      RATE_LIMITER: RateLimit;
    };
  };

export function createRouter(){
    return new OpenAPIHono({ strict: false })
}

export default function createApp() {
    const app = createRouter()
    app.use(logger())
    app.notFound(notFound)
    app.onError(onError)
    app.use(
        cloudflareRateLimiter<AppType>({
            rateLimitBinding: (c) => c.env.RATE_LIMITER,
            keyGenerator: (c) => c.req.header("cf-connecting-ip") ?? "",
            message:{message:"too many requests are there"} ,// Method to generate custom identifiers for clients.
          })
    )

    return app

}
