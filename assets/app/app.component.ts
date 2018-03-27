import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    paymentlnc = '1000000';
    paymnt = {
        value: "2000",
        date: "12-02-2018",
        desc: "description",
        idUser: "Lina",
        splitted: true,
    };
}