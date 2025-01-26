import * as HttpStatusCodes from "stoker/http-status-codes";
import { AnalyzeRoute } from "./url.routes";
import { Context } from "hono";
import { RouteHandler } from "@hono/zod-openapi";
import { parse } from "@/lib/parse";
import { evaluate } from "@/lib/evaluate";

export const url: RouteHandler<AnalyzeRoute> = async (c: Context) => {
    const body = await c.req.json();

    // Fetch the URL content and headers
    const res = await fetch(body.url);

    if (!res.ok) {
        return c.json({ error: "Failed to fetch the URL" }, HttpStatusCodes.BAD_REQUEST);
    }

    const data = await res.text();
    const headers = Array.from(res.headers.entries()).reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value }),
        {}
    );

    // Parse the HTML content
    const { p, title } = parse(data);

    // Evaluate the content
    const result = evaluate(p);

    // AI Analysis: Pass headers and content for SEO analysis
    const prompt = `Analyze the following webpage for SEO. Here are the headers:
    ${JSON.stringify(headers, null, 2)}

    Here is the content:
    ${p}`;

    const response = await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct", {
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
    });

    // Respond with SEO analysis score, title, and evaluation
    return c.json({ response, result, title, headers });
};
