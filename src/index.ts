import createApp from "@/lib/create-app"
import configureOpenAI from "@/lib/configure-openai"

const app = createApp()
configureOpenAI(app)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/error',(c) => {
  throw new Error('Custom 404 Message')
})

export default app;
