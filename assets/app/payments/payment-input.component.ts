import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PaymentService } from "./payment-service";
import {Payment} from "./payment.model";

@Component({
    selector: 'app-payment-input',
    templateUrl: './payment-input.component.html'
})

export class PaymentInputComponent {
    constructor(private paymentService: PaymentService){}
    //onSave(value: string, desc: string, splitted: boolean){
    onSubmit(form: NgForm){
        const payment = new Payment(form.value.value,new Date(),'Lina',form.value.desc, form.value.splitted); 
        console.log( payment.date + ' - ' + form.value.splitted );
        this.paymentService.addPayment(payment);
        form.resetForm();
    }
}