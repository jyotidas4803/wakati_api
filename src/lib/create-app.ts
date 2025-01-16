import { apiReference } from "@scalar/hono-api-reference"
import { OpenAPIHono } from "@hono/zod-openapi"
import packageJSON from "../../package.json" assert { type: "json" }

export default function configureOpenAPI(app: OpenAPIHono) {
    app.doc("/schema", {
        openapi: "3.0.0",
        info: {
            title: "Wakati API",
            description: "Text Intelligence Platform",
            version: packageJSON.version,
        },
    })
    app.get("/",
        apiReference({
            theme: "elysiajs",
            spec: {
                url: "/schema"
            }
        }))
}