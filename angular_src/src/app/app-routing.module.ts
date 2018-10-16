import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './Login_register/login/login.component';
import {RegisterComponent} from './Login_register/register/register.component';
import {AuthGuard} from './Login_register/~guards/auth.guard';
import {HomepageComponent} from './views/homepage/homepage.component';
import {BookListPageComponent} from './views/book-list-page/book-list-page.component';
import {MenuPageComponent} from './views/menu-page/menu-page.component';
import {RouterReturnComponent} from './components/router-return/router-return.component';

const appRoutes: Routes = [
  {path: 'HomePage', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'Booksystem', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: 'BookList', component: BookListPageComponent, canActivate: [AuthGuard]},
  {path: 'Menu', component: MenuPageComponent, canActivate: [AuthGuard]},
  {path: 'Return', component: RouterReturnComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
