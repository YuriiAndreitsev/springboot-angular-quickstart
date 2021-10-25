import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
