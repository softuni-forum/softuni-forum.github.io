import page from '@page/page.mjs';

import { addRender } from './middlewares/render.js';

import { homeView } from './views/home.js';


const root = document.querySelector('main');
const nav = document.querySelector('nav');

if (!root) {
    throw new ReferenceError('Document has no valid root!');
}
if (!nav) {
    throw new ReferenceError('Document has no valid navigation!');
}

page(addRender(root));
page('/', homeView);

page.start();