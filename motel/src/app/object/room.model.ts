export class Room {
    public id: number;
    public name: string;
    public description: string;
    public image: string;
    public category: number;
    public price: number;

    constructor(id: number, name: string, description: string, image: string, category: number, price: number) {
        this.id=id;
        this.name=name;
        this.description=description;
        this.image=image;
        this.category=category;
        this.price=price;
    }

}