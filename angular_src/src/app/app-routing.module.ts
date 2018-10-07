import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './Login_register/home/home.component';
import { LoginComponent} from './Login_register/login/login.component';
import { RegisterComponent} from './Login_register/register/register.component';
import { AuthGuard} from './Login_register/~guards/auth.guard';
import {HomepageComponent} from './views/homepage/homepage.component';

const appRoutes: Routes = [
  { path: 'HomePage', component: HomepageComponent },
  {path: 'usermanagement', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
