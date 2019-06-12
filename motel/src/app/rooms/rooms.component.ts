import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../object/rooms.service';
import { Room } from '../object/room.model';
import { CategopryService } from '../object/category.sevice';
import { Category } from '../object/category.model';
import { ReservationService } from '../object/reservation.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [CategopryService, ReservationService]
})
export class RoomsComponent implements OnInit {

  roomsList: Room[] = [];
  categoryList: Category[]  = [];
  status: string = "";
  category: number;
  data_start : String = "";
  data_end: Date;

  constructor(private roomsService: RoomsService, private categoryService: CategopryService, private reservationService: ReservationService) { }

  ngOnInit() {
    this.roomsList = this.roomsService.roomsList;
    this.categoryList = this.categoryService.categoryList;
    console.log( this.roomsList);
  }

  filterAction() {
    var rooms = this.roomsService.getRooms().slice(0);
    var reservation = this.reservationService.reservationList;
    var start_date = new  Date(this.data_start+"");
    var end_date = new Date(this.data_end+"");

    if(end_date > start_date) {
     
    } else {
      end_date.setDate(start_date.getDate()+1);
    }
  
    if(this.status == "Zajęte") {
      var reservedRooms =[];
      for(var i=0; i<reservation.length;i++) {
        var flagDelete = false; 
  
        if(start_date >= reservation[i].start_data  && start_date < reservation[i].end_data ) { 
          flagDelete = true;
        }
        else if(end_date >= reservation[i].start_data && end_date < reservation[i].end_data) {
          flagDelete = true;
        }
        else {}
  
        if(flagDelete) {
          for(var j=0;j<rooms.length;j++) {
            if(rooms[j].id == reservation[i].room_id) {
              reservedRooms.push(rooms[j])
            }
          }
        }
      }
      rooms = null;
      rooms = reservedRooms;
    } else if(this.status == "Wolne") {
      for(var i=0; i<reservation.length;i++) {
        var flagDelete = false; 
        if(start_date >= reservation[i].start_data  && start_date < reservation[i].end_data ) { 
          flagDelete = true;
        }
        else if(end_date >= reservation[i].start_data && end_date < reservation[i].end_data) {
          flagDelete = true;
        }
        else {}
  
        if(flagDelete) {
          for(var j=0;j<rooms.length;j++) {
             if(rooms[j].id == reservation[i].room_id) {
                rooms.splice(j,1);
              }
          }
        }
      }
    } else {
      //Wszystkie
    }

    if(this.category != null && this.category != 0) {
      for(var i=0;i<rooms.length;i++) {
        if(this.category != rooms[i].category) {
          rooms.splice(i, 1);
        }
      }
    }

    this.roomsList = rooms;
  }

}
