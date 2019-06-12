import { Component } from '@angular/core';
import { RoomsService } from './object/rooms.service';
import { CustomerService } from './object/customer.service';
import { ReservationService } from './object/reservation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RoomsService, CustomerService, ReservationService]

})
export class AppComponent {
  
  constructor(private roomService: RoomsService, private customerService: CustomerService, private reservationService: ReservationService) {
    
  }
}
