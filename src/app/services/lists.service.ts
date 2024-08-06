import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../model/List';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  public getAllLists(): Observable<List[]>{
    return this.http.get<List[]>(environment.urlAPI+"/lists")
  }

  public addNewList(list:List): Observable<List>{
    return this.http.post<List>(environment.urlAPI+"/lists",list)
  }

  public getListById(idList: number): Observable<List>{
    return this.http.get<List>(environment.urlAPI+"/lists/"+idList);
  }
}
