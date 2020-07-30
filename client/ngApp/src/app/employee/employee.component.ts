import { Component, OnInit } from '@angular/core';
import {EmployeeModel} from './employee.model';
import{ EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employee:EmployeeModel[];
  constructor( private employeeService:EmployeeService){
  }

 ngOnInit(): void {
  this.employeeService.getemployee().subscribe((data)=>{
this.employee=JSON.parse(JSON.stringify(data));
   })
  }
}


