import { Component, OnInit } from '@angular/core';
import { ListsService } from '../../services/lists.service';
import { List } from '../../model/List';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent implements OnInit{

  public lists: List[];
  public newList: List;
   
  constructor(private service: ListsService){
    this.lists = [];
    this.newList = new List();
   }

  ngOnInit(): void {
    this.getAllLists();
  }

  public getAllLists(): void {
    this.service.getAllLists().subscribe({
      next: (res: List[]) => {
        this.lists = res;
      },
      error: (err) => {
        alert("Failed to get Shopping Lists");
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }

  public addNewList(){
    this.service.addNewList(this.newList).subscribe({
      next: (res: List) => {
        this.getAllLists();
      },
      error: (err) => {
        alert("Failed to create a new List. Try again");
      },
      complete: () => {
        alert("Successful on Creating the List")
      }
    });
  }
}
