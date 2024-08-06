import { Item } from "./Item";

export class List{
    public id: number; 
    public creationDate: Date;
    public shopName: string;    
    public totalPrice: number;
    public status: number;
    public itens: Item[];

    public constructor(){
        this.id = 0;
        this.creationDate = new Date(); 
        this.shopName = ""; 
        this.totalPrice = 0; 
        this.status = 0;
        this.itens = [];
    }
}