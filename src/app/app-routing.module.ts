import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAllComponent } from './components/employee-all/employee-all.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {path:'add',component:EmployeeComponent},
  {path:'list',component:EmployeeAllComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
