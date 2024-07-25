import { html } from '@lit/lit-html.js';

export const navTemplate = (hasUser, isAdmin) => html`
<a href="/">Home</a>
<a href="/posts">Posts</a>
${!hasUser && guestNav}
${hasUser && userNav}
`;

const guestNav = () => html`
<a href="/login">Login</a>
<a href="/register">Register</a>`;

const userNav = () => html`
<a href="/">Logout</a>`;