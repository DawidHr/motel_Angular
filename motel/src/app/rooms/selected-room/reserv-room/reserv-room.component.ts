import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/object/customer.service';
import { Customer } from 'src/app/object/customer.model';
import { FormsModule } from '@angular/forms';
import { ReservationService } from 'src/app/object/reservation.service';
import { Reservation } from 'src/app/object/reservation.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reserv-room',
  templateUrl: './reserv-room.component.html',
  styleUrls: ['./reserv-room.component.css']
})
export class ReservRoomComponent implements OnInit {
  customerList: Customer[] = [];
  reservationList: Reservation[] = [];
  id: number;
  
 constructor(private route: ActivatedRoute,private customerService: CustomerService, private reservationService: ReservationService, private router: Router) { }

  ngOnInit() {
    this.customerList=this.customerService.customerList;
    this.reservationList = this.reservationService.reservationList;
    this.id= this.route.snapshot.params['id'];
  }

  addReservation(form: NgForm) {
  var customer_id = Math.floor((Math.random() * 100) + 1);
    var customer = new Customer(customer_id, form.form.value.firstname, form.form.value.lastname, form.form.value.sex, form.form.value.pesel);
    this.customerList.push(customer);
    var reservation_id = Math.floor((Math.random() * 100) + 1);
    var reservation = new Reservation(reservation_id, this.id, customer_id, form.form.value.data_start, form.form.value.data_end);
    this.reservationList.push(reservation);
    this.router.navigate(['/rooms']);
  }

}
