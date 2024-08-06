import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/Item';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { List } from '../model/List';

@Injectable({
  providedIn: 'root'
})
export class ListItensService {

  constructor(private http:HttpClient) { }

  public addNewItem(item:Item): Observable<Item>{
    return this.http.post<Item>(environment.urlAPI+"/item", item);
  }
  public deleteItemFromList(id: number): Observable<void>{
    return this.http.delete<void>(environment.urlAPI+"/item/"+id);
  }
  public alterItemOnList(item: Item): Observable<Item>{
    return this.http.put<Item>(environment.urlAPI+"/item/"+item.id,item);  
  }
}
