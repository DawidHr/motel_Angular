import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomsService } from 'src/app/object/rooms.service';
import { Room } from 'src/app/object/room.model';
import { CategopryService } from 'src/app/object/category.sevice';

@Component({
  selector: 'app-selected-room',
  templateUrl: './selected-room.component.html',
  styleUrls: ['./selected-room.component.css'],
  providers: [CategopryService]
})
export class SelectedRoomComponent implements OnInit {
  id: number;
  room: Room = null;
  category: string = "";
  
  constructor(private route: ActivatedRoute, private roomsService: RoomsService, private categoryService: CategopryService, private rotes: Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
   var rooms = this.roomsService.roomsList;
    for(var i=0;i<rooms.length;i++) {
      if(rooms[i].id == this.id) {
        this.room = rooms[i];
      }
    }
  
    if(this.room == null) {
      this.rotes.navigate(['/rooms']);
      return;
    }

    var categories = this.categoryService.categoryList;
    for(var i=0;i<categories.length;i++) {
      if(categories[i].id == this.room.category) {
        this.category = categories[i].name;
      }
    }
  }

}
