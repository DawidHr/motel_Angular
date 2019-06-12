import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SelectedRoomComponent } from './rooms/selected-room/selected-room.component';
import { Routes, RouterModule } from '@angular/router';
import { EditRoomComponent } from './rooms/selected-room/edit-room/edit-room.component';
import { ReservRoomComponent } from './rooms/selected-room/reserv-room/reserv-room.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    SelectedRoomComponent,
    EditRoomComponent,
    ReservRoomComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
