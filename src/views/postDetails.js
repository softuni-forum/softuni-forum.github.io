import { html } from '@lit/lit-html.js';
import { getPostById } from '../data/posts.js';

const postsTemplate = (data, comments) => html`
<h2>${data.title}</h2>
<p>By ${data.author?.username}</p>
<p>${data.content}</p>`;

/** @type {import('..').SiteView} */
export async function postDetailsView(ctx) {
    const postId = ctx.params.id;

    const post = await getPostById(postId);

    ctx.render(postsTemplate(post, []));
}