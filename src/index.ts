import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'
import { pinoLogger } from 'hono-pino'
import logger from '@/lib/logger'


const app = new OpenAPIHono()
// app.use(pinoLogger(
//   {
//     http:{
//       reqId: ()=>crypto.randomUUID()
//     }
//   }
// ))

app.use(logger())

app.notFound(notFound)
app.onError(onError)

app.get('/', (c) => {
  // c.var.lo("")
  return c.text('Hello Hono!')
})

app.get('/error',(c) => {
  throw new Error('Custom 404 Message')
})

export default app
