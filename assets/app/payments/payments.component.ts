/*
* http://usejsdoc.org/
*/
import {Component} from "@angular/core";

@Component({
    selector: 'app-payments',
    template: `
        <div class="row">
            <app-payment-input></app-payment-input>
        </div>
        <hr>
        <div class="row">
            <app-payment-list></app-payment-list>
        </div>
    `
})
export class PaymentsComponent {
    
}