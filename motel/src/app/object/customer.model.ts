export class Customer {
    id: number;
    firstname: string;
    lastname: string;
    sex: string;
    pesel: number;

    constructor(id: number, name1: string, name2: string, sex: string, pesel: number) {
        this.id=id;
        this.firstname=name1;
        this.lastname=name2;
        this.sex=sex;
        this.pesel=pesel;

    }
}