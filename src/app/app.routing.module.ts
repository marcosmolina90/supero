import { TasksComponent } from './tasks/tasks.component';



import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';


import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';


const appRoutes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'tasks', component: TasksComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
