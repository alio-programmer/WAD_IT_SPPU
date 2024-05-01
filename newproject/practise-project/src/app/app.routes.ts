import { Routes } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { LoggedinpageComponent } from './loggedinpage/loggedinpage.component';

export const routes: Routes = [
  {
    path: 'logincomponent',
    component: LogincomponentComponent,
  },
  {
    path: 'signupcomponent',
    component: SignupcomponentComponent,
  },
  {
    path: 'loggedin',
    component: LoggedinpageComponent,
  },
];
