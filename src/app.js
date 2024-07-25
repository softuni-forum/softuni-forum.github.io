import page from '@page/page.mjs';
import { addNavigation } from './middlewares/navigation.js';

import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';

import { navTemplate } from './views/nav.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { logoutAction } from './views/logout.js';


const root = document.querySelector('main');
const nav = document.querySelector('nav');

if (!root) {
    throw new ReferenceError('Document has no valid root!');
}
if (!nav) {
    throw new ReferenceError('Document has no valid navigation!');
}

page(addSession());
page(addNavigation(nav, navTemplate));
page(addRender(root));
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutAction);

page.start();

