import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';
import { Item } from '../../model/Item';
import { ActivatedRoute } from '@angular/router';
import { ListItensService } from '../../services/list-itens.service';
import { List } from '../../model/List';
import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'app-lists-details',
  templateUrl: './lists-details.component.html',
  styleUrls: ['./lists-details.component.css']
})
export class ListsDetailsComponent implements OnInit{

  public listProducts: Product[] = [];
  public newProduct: Product;
  public newProductForm: boolean = false;
  public newItem: Item;
  public idList: number = 0;
  public shopList: List = new List();

  constructor(private productService:ProductsService, 
              private itemService: ListItensService,
              private shopListService: ListsService, 
              private activatedRoute: ActivatedRoute){
    this.newProduct = new Product();
    this.newItem = new Item();
    this.idList = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllItensFromList(this.idList);
  }

  public getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: (res: Product[]) => {
        this.listProducts = res;
      },
      error: (err) => {
        alert("Failed to list all Products. Try again");
      },
      complete: () => {}
    })
  }
  public createNewProduct(){
    this.newProductForm = true;
  }
  public confirmNewProduct(){
    this.productService.addNewProduct(this.newProduct).subscribe({
      next: () => {
        this.newProduct = new Product();
      },
      error: (err) => {
        alert("Couldnt create a new Product. Try Again.");
      },
      complete: () => {
        console.log("Successful on creating the product");
        this.getAllProducts();
      }
    })
    this.newProductForm = false;
  }

  public addItemToList(){
    this.newItem.list.id = this.idList; 
    
    this.itemService.addNewItem(this.newItem).subscribe({
      next: (res : Item) => {
        this.newItem = new Item();
      },
      error: (err) => {
        alert("Error on adding Item to List");
      },
      complete: () => {
        console.log("Item added on List");
        this.getAllItensFromList(this.idList);
      }
    })
  }

  public getAllItensFromList(idList: number){
    this.shopListService.getListById(idList).subscribe({
      next: (res: List) => {
        this.shopList = res;
      },
      error: (err) => {
        alert("Couldnt find any List with this Id. Verify the List existence and try again.");
      },
      complete: () => {
        console.log("Seeing all itens");
      }
    })
  }

  public removeItemFromList(item: Item){
    this.itemService.deleteItemFromList(item.id).subscribe({
      next: () => {
        console.log("REMOVIDO");
      },
      error: (err) => {
        alert("Error while Removing the item.");
      },
      complete: () => {
        console.log("Success on removing the item");
        this.getAllItensFromList(this.idList);
      }
    })
  }

  public updateItemStatus(item: Item){
    item.list = new List();
    item.list.id = this.idList;
    if (item.status == 0){
      item.status = 1;
    } else item.status = 0;

    this.itemService.alterItemOnList(item).subscribe({
      next: (res: Item) => {
        
      },
      error: (err) => {
        alert("Error while updating item status");
      },
      complete: () => {
        console.log("Success on updating Item status");
      }
    })
  }

  public showModal(){
    document.getElementById("btn-modal")?.click();
  }
}
