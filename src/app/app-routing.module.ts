import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EmployeesComponent } from './employees/employees.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'gallery',component:GalleryComponent
  },
  {
    path:'employees',component:EmployeesComponent
  },
  {
    path:'Contacts',component:ContactsComponent
  },
  {
    path:'Leads',component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
