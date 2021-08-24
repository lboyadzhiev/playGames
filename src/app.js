'use strict';

import page from '../node_modules/page/page.mjs';
import { setUserNav } from './utilites.js';
import { renderContent } from './utilites.js';

import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { catalogPage } from './views/catalog.js';
import { homePage } from './views/home.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

import * as api from './api/data.js';
window.api = api;

page('/login', renderContent, loginPage);
page('/register', renderContent, registerPage);
page('/catalog', renderContent, catalogPage);
page('/home', renderContent, homePage);
page('/create', renderContent, createPage);
page('/details/:id', renderContent, detailsPage);
page('/edit/:id', renderContent, editPage);

setUserNav();
page.start();
