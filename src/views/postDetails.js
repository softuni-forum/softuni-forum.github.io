import { html } from '@lit/lit-html.js';
import { getPostById } from '../data/posts.js';

const postsTemplate = (data, isOwner, comments) => html`
<h2>${data.title}</h2>
<p>By ${data.author?.username}</p>
<p>${data.content}</p>
${
    isOwner ? html`<div>
        <a href="/edit/${data.objectId}">Edit post</a>
    </div>` : null
}
`;

/** @type {import('..').SiteView} */
export async function postDetailsView(ctx) {
    ctx.showLoader();

    const postId = ctx.params.id;

    const post = await getPostById(postId);

    const isOwner = ctx.user?.objectId == post.author.objectId;

    ctx.hideLoader();
    ctx.render(postsTemplate(post, isOwner, []));
}