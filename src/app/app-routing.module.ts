import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StandComponent } from './stand/stand.component';


const routes: Routes = [
  { path: "home", redirectTo: '' },
  { path: "stand", component: StandComponent},
  { path: "", component: HomeComponent, pathMatch: "full" }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
