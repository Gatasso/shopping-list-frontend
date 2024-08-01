import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { List } from '../../model/List';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'] 
})
export class ListsComponent implements OnInit {

  public lists: List[];
  public newList: List;
   
  constructor(private service: ListsService) {
    this.lists = [];
    this.newList = new List();
  }

  ngOnInit(): void {  }

}
