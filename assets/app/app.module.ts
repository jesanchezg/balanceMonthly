import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { PaymentComponent } from "./payments/payment.component";
import { PaymentListComponent } from "./payments/payment-list.component";
import {PaymentInputComponent} from "./payments/payment-input.component";
import {PaymentsComponent} from "./payments/payments.component";
import {AuthenticationComponent} from "./users/authentication.component";
import {HeaderComponent} from "./header.component";


@NgModule({
    declarations: [
        AppComponent,
        PaymentComponent,
        PaymentListComponent,
        PaymentInputComponent,
        PaymentsComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
    imports: [BrowserModule, FormsModule ],
    bootstrap: [AppComponent]
})
export class AppModule {

}