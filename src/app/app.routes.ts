import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AppShellComponent } from './layout/app-shell/app-shell.component';
import { LoginComponent } from './features/auth/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        loadChildren: () => import('./features/products/product.routes').then(m => m.ROUTES),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
