import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomsService } from 'src/app/object/rooms.service';
import { CategopryService } from 'src/app/object/category.sevice';
import { Room } from 'src/app/object/room.model';
import { Category } from 'src/app/object/category.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css'],
  providers: [CategopryService]
})
export class EditRoomComponent implements OnInit {
  id: number;
  room: Room = null;
  category: string = "";
  categoryList: Category[] = [];

  
  constructor(private route: ActivatedRoute, private roomsService: RoomsService, private categoryService: CategopryService, private router: Router) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    var rooms = this.roomsService.roomsList;
    for(var i=0;i<rooms.length;i++) {
      if(rooms[i].id == this.id) {
        this.room = rooms[i];
      }
    }
    var categories = this.categoryService.categoryList;
    for(var i=0;i<categories.length;i++) {
      if(categories[i].id == this.room.category) {
        this.category = categories[i].name;
      }
    }
    this.categoryList = this.categoryService.categoryList;
  }


  public editRoom(form: NgForm) {

    var room_list = this.roomsService.roomsList;
    for(var i=0;i<room_list.length;i++) {
      if(room_list[i].id == this.id) {
        room_list[i].name=form.form.value.roomname;
        room_list[i].price=form.form.value.price;
        room_list[i].image=form.form.value.image_url;
        room_list[i].category=form.form.value.category;
        room_list[i].description=form.form.value.description;
        console.log(room_list[i]);
      }
    }
    console.log( this.roomsService.roomsList);
    this.router.navigate(['/rooms']);
  }
}
