import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { PaymentComponent } from "./payments/payment.component";
import { PaymentListComponent } from "./payments/payment-list.component";
import {PaymentInputComponent} from "./payments/payment-input.component";

@NgModule({
    declarations: [
        AppComponent,
        PaymentComponent,
        PaymentListComponent,
        PaymentInputComponent
    ],
    imports: [BrowserModule, FormsModule ],
    bootstrap: [AppComponent]
})
export class AppModule {

}