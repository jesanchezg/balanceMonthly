import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { PaymentComponent } from "./payments/payment.component";
import { PaymentListComponent } from "./payments/payment-list.component";
import { PaymentInputComponent } from "./payments/payment-input.component";
import { PaymentsComponent } from "./payments/payments.component";
import { AuthenticationComponent } from "./users/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from "./app.routing";
import { LogoutComponent } from "./users/logout.component";
import { SigninComponent } from "./users/signin.component";
import { SignupComponent } from "./users/signup.component";

@NgModule({
    declarations: [
        AppComponent,
        PaymentComponent,
        PaymentListComponent,
        PaymentInputComponent,
        PaymentsComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [BrowserModule, FormsModule , routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}