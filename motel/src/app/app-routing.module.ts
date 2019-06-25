import { Routes, RouterModule } from "@angular/router";
import { RoomsComponent } from './rooms/rooms.component';
import { SelectedRoomComponent } from './rooms/selected-room/selected-room.component';
import { EditRoomComponent } from './rooms/selected-room/edit-room/edit-room.component';
import { ReservRoomComponent } from './rooms/selected-room/reserv-room/reserv-room.component';
import { NgModule } from '@angular/core';
import { ReservationComponent } from './reservation/reservation.component';



const appRoutes: Routes = [
    {  path: '',  component: RoomsComponent}, 
    {  path: 'rooms',  component: RoomsComponent },
    {  path: 'room/:id', component: SelectedRoomComponent },
    {  path: 'room/:id/edit', component: EditRoomComponent },
    {  path: 'room/:id/reserv', component: ReservRoomComponent },
    {  path: 'reservation', component: ReservationComponent },
    {  path: '**', redirectTo: '' }
  ];

  @NgModule({
   
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }