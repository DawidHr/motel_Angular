import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../object/reservation.service';
import { Reservation } from '../object/reservation.model';
import { Customer } from '../object/customer.model';
import { CustomerService } from '../object/customer.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationList: Reservation[] = [];

  constructor(private reservationService: ReservationService, private customerService: CustomerService) { }

  ngOnInit() {
    this.reservationList = this.reservationService.reservationList;
  }

  getCustomerName(id) {
    var customers = this.customerService.customerList;
    for(var i=0; i<customers.length;i++) {
      if(customers[i].id == id) {
        return customers[i].firstname;
      }
    }
    return "";
  }

  getLastName(id) {
    var customers = this.customerService.customerList;
    for(var i=0; i<customers.length;i++) {
      if(customers[i].id == id) {
        return customers[i].lastname;
      }
    }
    return "";
  }

  getPesel(id) {
    var customers = this.customerService.customerList;
    for(var i=0; i<customers.length;i++) {
      if(customers[i].id == id) {
        return customers[i].pesel;
      }
    }
    return "";
  }

  getSex(id) {
    var customers = this.customerService.customerList;
    for(var i=0; i<customers.length;i++) {
      if(customers[i].id == id) {
        return customers[i].sex;
      }
    }
    return "";
  }

}
