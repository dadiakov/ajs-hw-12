import Buyable from '../domain/Buyable';

export default class Cart {
    private items : Buyable[] = [];

    add(item : Buyable) : void {
        let oldQuont : number | undefined = 0;
        let index : number | undefined = this.findIndex(item);
        if (item.addable) {
           if (this.items.some(e => e.id == item.id)) {
                oldQuont = this.items[index].quantity;
                oldQuont++;
                this.items[index].quantity = oldQuont;
           } else {
                oldQuont++;
                item.quantity = oldQuont;
           }
        } 
        if (this.items.some(e => e.id == item.id)) return;
        this.items.push(item);
    }

    removeOne(id : number) : void {
        let index : number = this.items.findIndex(e => e.id == id);
        let currentQuont = this.items[index].quantity;
        if (currentQuont > 1) {
            currentQuont--;
            this.items[index].quantity = currentQuont;
        } else {
            this.items.splice(index, 1);
        }
    }

    getAll() :Buyable[] {
        return [...this.items]
    }

    calculateTotalPrice() : number {
        return [...this.items].reduce((sum, item) => sum + item.price * item.quantity , 0);
    }

    calculateTotalWithDiscount(discount : number) : number {
        return Math.floor([...this.items].reduce((sum, item) => sum + item.price * item.quantity, 0) * ((100 - discount)/100))
    }

    findIndex(item : Buyable) : number {
        return this.items.findIndex(e => e.id == item.id);
    }
}