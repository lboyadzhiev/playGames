'use strict';

import page from '../node_modules/page/page.mjs';

import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/home', homePage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

page.start();
