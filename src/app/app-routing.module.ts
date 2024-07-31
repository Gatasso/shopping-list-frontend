import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { ListsDetailsComponent } from './components/lists-details/lists-details.component';

const routes: Routes = [
  {path:'', component: ListsComponent},
  {path:'details', component: ListsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
