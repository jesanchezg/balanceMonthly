/*
* http://usejsdoc.org/
*/
import { Routes, RouterModule } from "@angular/router";

import { PaymentsComponent } from "./payments/payments.component";
import { AuthenticationComponent } from "./users/authentication.component";
import { AUTH_ROUTES } from "./users/auth.routes";

const APP_ROUTES: Routes= [
    { path: '', redirectTo: '/payments', pathMatch: 'full'},
    { path: 'payments', component: PaymentsComponent},
    { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);