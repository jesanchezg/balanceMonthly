import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Payment } from "./payment.model";

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styles: [`
        .value {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class PaymentComponent {
    paymentBlnc = '1000000';
    @Input('inputPayment') payment: Payment;
    @Output() editClicked = new EventEmitter<string>();
    
    color = 'red';
    
    onEdit(){
        this.editClicked.emit('500');
    }
    
}