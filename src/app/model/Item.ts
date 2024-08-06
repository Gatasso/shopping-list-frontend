import { List } from "./List";
import { Product } from "./Product";

export class Item{
    public id: number;
    public quantity: number;
    public totalPrice: number;
    public status: number;
    public product: Product;
    public list: List; 

    public constructor(){
        this.id = 0;
        this.quantity = 0;
        this.totalPrice = 0;
        this.status = 0;
        this.product = new Product();
        this.list = new List();
    }
}