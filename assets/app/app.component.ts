import { Component, OnInit } from '@angular/core';
import {Payment} from "./payments/payment.model";
import {PaymentService} from "./payments/payment-service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [PaymentService]
})
export class AppComponent implements OnInit{
//    paymnt: Payment = new Payment('200',new Date('2018-03-31'),'Lina','Fist Pay', true);
        paymnts: Payment[] = [
        new Payment('200',new Date('2018-03-31'),'Lina','Fist Pay', true),
        new Payment('600',new Date('2018-04-08'),'Lina','Walmart Couch bebé', true)
        ];
//    To For Row
//Cut to payment-list.component.ts in the definition of the class.
//        value: '2000',
//        date: new Date('2018-03-31'),//new Date(2018,02,12),
//        desc: 'description',
//        user: 'Lina',
//        splitted: true,
//    };
        constructor(private paymentService: PaymentService){}
        
        ngOnInit(){
            this.paymentService.setPayments(this.paymnts);
        }
}