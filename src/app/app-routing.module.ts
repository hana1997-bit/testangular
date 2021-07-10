import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';


const routes: Routes = [  {path :"add" , component : AddPostComponent},
{path :"modifier" , component : UpdatePostComponent},
{path :"list" , component : ListPostComponent},
{path: '', redirectTo: 'list', pathMatch: 'full'},
{path: 'modifier/:id', component: UpdatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
