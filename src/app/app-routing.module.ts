import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { EnrollComponent } from './auth/enroll/enroll.component';
import { ActivateComponent } from './auth/activate/activate.component';
import { EnrollResolver, FA2Resolver } from './data.resolver';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { EnableGoogleAuthenticatorComponent } from './auth/enable-google-authenticator/enable-google-authenticator.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'register', component: EnrollComponent },
  { path: 'activate/:id', component: ActivateComponent, resolve: { data: EnrollResolver }, },
  { path: 'e/:id', component: ActivateComponent, resolve: { data: EnrollResolver }, },
  { path: 'enroll-2fa', component: EnableGoogleAuthenticatorComponent, resolve: { data: FA2Resolver }, },
  { path: 'home', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
