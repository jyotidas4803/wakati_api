import type { OpenAPIHono } from '@hono/zod-openapi'
export default function configureOpenAI(app: OpenAPIHono) {
    
app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: packageJSON.version,
      title: 'Wakati-API',
      description: 'A simple API to convert text to wakati',
    },
  })