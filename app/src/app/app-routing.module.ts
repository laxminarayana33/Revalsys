import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRegistraionComponent } from './edit-registraion/edit-registraion.component';

const routes: Routes = [

  {
    path:'edit', component: EditRegistraionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
