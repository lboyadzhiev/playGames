'use-strict';

import * as api from './api.js';
const host = 'http://localhost:3030';

export async function login(email, password) {
    const result = await api.post(host + '/users/login', { email, password });

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.eccessToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function register(email, password, repeatPassword) {
    const result = await api.post(host + '/users/register', { email, password, repeatPassword });

    sessionStorage.setItem('emial', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function logout() {
    const result = await api.get(host + '/users/logout');

    sessionStorage.removeItem('emial');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');
}
