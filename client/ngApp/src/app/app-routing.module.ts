import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { JobdataComponent } from './jobdata/jobdata.component';
import { LeaveComponent } from './leave/leave.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/employee',
    pathMatch:'full'
  },
  {
    path:'employee',
component:EmployeeComponent
  },
  {
    path:'jobdata',
component:JobdataComponent
  },
  {
    path:'leave',
component:LeaveComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
