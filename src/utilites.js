'use strict';
import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

export function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {},
    };

    const token = sessionStorage.getItem('authToken');

    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export function setUserNav() {
    const username = sessionStorage.getItem('username');

    if (username != null) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}
