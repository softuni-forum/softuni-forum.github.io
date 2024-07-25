import { TemplateResult } from "lit-html"

declare type SiteView = (ctx: AppContext) => void

declare type AppContext = PageJS.Context & {
    render(templateResult: TemplateResult): void
}