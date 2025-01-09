import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'

import logger from '@/lib/logger'

export function createRouter(){
  const app = new OpenAPIHono(
    {
      strict:false
    }
  )
}
export default function createApp(){
    const app =createRouter()

      app.use(logger)
      // app.use(serveEmojiFavicon("🚀"))
      
      app.notFound(notFound)
      app.onError(onError)

      return app;
}