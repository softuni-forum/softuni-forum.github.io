import { html } from '@lit/lit-html.js';
import { getRecentPosts } from '../data/posts.js';
import { postPreviewTemplate } from './partials/post.js';

const postsTemplate = (posts) => html`
<h1>All posts</h1>
<p>
    <a href="/create">Publish new post</a>
</p>
<ul>
    ${posts.map(postPreviewTemplate)}
</ul>`;

/** @type {import('..').SiteView} */
export async function postsView(ctx) {
    const posts = await getRecentPosts();

    ctx.render(postsTemplate(posts.results));
}