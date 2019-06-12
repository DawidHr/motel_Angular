import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservRoomComponent } from './reserv-room.component';

describe('ReservRoomComponent', () => {
  let component: ReservRoomComponent;
  let fixture: ComponentFixture<ReservRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
