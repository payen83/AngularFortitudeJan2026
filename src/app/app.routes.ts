import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Todo } from './pages/todo/todo';
import { ProductsPage } from './pages/products-page/products-page';
import { DetailPage } from './pages/detail-page/detail-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePage
    },
    {
        path: 'todo',
        component: Todo
    },
    {
        path: 'products',
        component: ProductsPage
    },
    {
        path: 'detail/:id',
        component: DetailPage
    }
];
