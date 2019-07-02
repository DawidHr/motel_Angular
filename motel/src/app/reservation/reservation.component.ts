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
  data_start : String = "";
  data_end: String = "";

  constructor(private reservationService: ReservationService, private customerService: CustomerService) { }

  ngOnInit() {
   // this.reservationList = this.reservationService.reservationList;
    var start_date = new Date();
    for(var i=0;i<this.reservationService.reservationList.length;i++) {
      if(this.reservationService.reservationList[i].start_data >= start_date) {
        this.reservationList.push(this.reservationService.reservationList[i]);
      }
    }

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

  filterAction() {
    var reservationServiceList = this.reservationService.reservationList.slice(0);
    var start_date = new  Date(this.data_start+"");
    var end_date = new Date(this.data_end+"");
    if(this.data_start == null || this.data_start == "") {
      start_date = new Date();
    }
    if(this.data_end == null || this.data_end == "") {
      end_date = new Date(9999, 12, 1);
    }
    var newList = [];
    for(var i=0;i<reservationServiceList.length;i++) {
      if(reservationServiceList[i].start_data >= start_date && reservationServiceList[i].end_data <= end_date) {
        newList.push(reservationServiceList[i]);
      }
    }
    this.reservationList = null; 
    this.reservationList = newList; 
    
   
  }

}
