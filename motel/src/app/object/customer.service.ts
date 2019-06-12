import { Customer } from './customer.model';

export class CustomerService {
    customerList: Customer[] = [];

    constructor() {
        this.customerList = [new Customer(1, "Adam", "Kowalski", "M", 99999999), new Customer(2, "Ewa", "Kowalska", "K", 787778),
                            new Customer(3, "Franek", "Nowak", "M", 5677688)];
    }
}