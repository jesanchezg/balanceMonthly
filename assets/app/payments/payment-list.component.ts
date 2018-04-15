import { Component, OnInit } from "@angular/core";
import { Payment } from "./payment.model";
import {PaymentService} from "./payment-service";

@Component({
    selector: 'app-payment-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-payment 
                    [inputPayment]="paymnt" 
                    (editClicked)="paymnt.value = $event"
                    *ngFor="let paymnt of paymnts"></app-payment>
        </div>
    `
})
export class PaymentListComponent implements OnInit {
        paymnts: Payment[] = [
        new Payment('200',new Date('2018-03-31'),'Lina','Fist Pay', true),
        new Payment('600',new Date('2018-04-08'),'Lina','Walmart Couch bebé', true)
        ];
        
        constructor(private paymentService: PaymentService){
            
        }
        
        ngOnInit(){
            this.paymnts = this.paymentService.getPayments();
        }
}
