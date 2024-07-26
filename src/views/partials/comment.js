import { html } from '@lit/lit-html.js';

export const commentTemplate = (data) => html`
<div>
    <p>
        ${data.content}
    </p>
    <p>By ${data.author.username}</p>
</div>`;