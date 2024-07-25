import page from '@page/page.mjs';
import { html, render } from '@lit/lit-html.js';

import * as api from './data/api.js';
import * as userApi from './data/users.js';
// @ts-ignore
window.api = api;
// @ts-ignore
window.userApi = userApi;

page('/', homeView);

page.start();

function homeView() {
    render(html`<h1>Hello world!</h1>`, document.body);
}