export class Reservation {
    reservation_id: number;
    room_id: number;
    customer_id: number;
    start_data: Date;
    end_data: Date;

    constructor(id1: number, id2: number, id3: number, start: Date, end: Date) {
        this.reservation_id=id1;
        this.room_id=id2;
        this.customer_id=id3;
        this.start_data=start;
        this.end_data=end;
    }
}