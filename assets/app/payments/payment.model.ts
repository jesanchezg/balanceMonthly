export class Payment {
    value: string;
    date: Date;
    desc?: string;
    user: string;
    splitted?: boolean;
    constructor(value: string, date: Date, user: string, desc?: string, splitted?: boolean){
        this.value = value;
        this.date = date;
        this.desc = desc;
        this.user = user;
        this.splitted = splitted;
    }
};
