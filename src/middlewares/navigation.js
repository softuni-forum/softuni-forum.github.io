import { render } from '@lit/lit-html.js';

/**
 * @param {HTMLElement} navRoot 
 * @param {(hasUser: boolean) => import('@lit/lit-html.js').TemplateResult} navTemplate
 */
export function addNavigation(navRoot, navTemplate) {
    return function (ctx, next) {
        const hasUser = Boolean(ctx.user);

        render(navTemplate(hasUser), navRoot);

        next();
    };
}