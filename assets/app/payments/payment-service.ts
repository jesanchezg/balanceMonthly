import {Payment} from "./payment.model";
export class PaymentService {
    payments: Payment[] = [];
    
    setPayments(payments: Payment[]){
        this.payments = payments;
    }
    
    addPayment(payment: Payment){
        this.payments.push(payment);
        console.log(this.payments);
    }
    
    getPayments(){
        return this.payments;
    }
    
    deletePayment(payment: Payment){
        this.payments.splice(this.payments.indexOf(payment), 1);
    }
    
}