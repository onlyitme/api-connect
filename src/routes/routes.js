import React from 'react';
import Dashboard from "../pages/backend/Dashboard";
import Book from "../pages/backend/Book";

const routes = [
    {path: '/admin', exact: true, name: 'Admin'},
    {path: '/admin/dashboard', exact: true, name: 'Dashboard',
        component: Dashboard},
    {path: '/admin/books', exact: true, name: 'Books',
        component: Book},
]

export default routes;
