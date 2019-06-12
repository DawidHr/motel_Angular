import { Room } from './room.model';

export class RoomsService {
    roomsList: Room[] = [];

    constructor() {
        this.roomsList = [new Room(1, "Pokoj 1", "", "https://i.nocimg.pl/img/zdj_hd/d8/933/22-szczawnica-pokoje-niezapominajka.jpg", 1, 77.65), new Room(2, "Pokoj 2", "", "https://i.nocimg.pl/img/zdj_hd/d8/620/183-pobierowo-pokoje-goscinne-ok.jpg", 1, 65.55), new Room(3, "Pokoj 3", "", "https://i.ehoimg.pl/d/y/ya/ya6614/pokoje-goscinne-soplicowo-gdansk-942255.jpeg", 2, 100.05), new Room(4, "Pokoj 4", "", "http://willapoprad.pl/wp-content/uploads/2016/07/pokoje-top.jpg", 2, 134.22), new Room(5, "Pokoj 5", "", "https://t-ec.bstatic.com/images/hotel/max1024x768/144/144903127.jpg", 1, 99.99)];
    }

    getRooms() {
        var x = this.roomsList;
        return x;
    }
   
}