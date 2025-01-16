import * as cheerio from "cheerio"

export function parse(text: string) {
    const $ = cheerio.load(text)
    return {
        p: $("p").text(),
        title: $("title").text()
    }
}