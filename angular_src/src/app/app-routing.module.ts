import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './Login_register/home/home.component';
import { LoginComponent} from './Login_register/login/login.component';
import { RegisterComponent} from './Login_register/register/register.component';
import { AuthGuard} from './Login_register/~guards/auth.guard';
import {HomepageComponent} from './views/homepage/homepage.component';
import {BookListPageComponent} from './views/book-list-page/book-list-page.component';
import {MainPageComponent} from './views/main-page/main-page.component';
import {MenuPageComponent} from './views/menu-page/menu-page.component';
import {RouterReturnComponent} from './components/router-return/router-return.component';

const appRoutes: Routes = [
  { path: 'HomePage', component: MainPageComponent },
  {path: 'usermanagement', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Booksystem', component: HomepageComponent },
  { path: 'BookList', component: BookListPageComponent },
  { path: 'Menu', component: MenuPageComponent },
  { path: 'Return', component: RouterReturnComponent },





  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
