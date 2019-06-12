import { Reservation } from './reservation.model';

export class ReservationService {
    reservationList: Reservation[] = [];

    constructor() {
        this.reservationList = [new Reservation(1, 1, 1, new Date(2019, 5, 2), new Date(2019, 5, 5)), new Reservation(1, 1, 1, new Date(2019, 6, 5), new Date(2019, 6, 8))];
    }
}