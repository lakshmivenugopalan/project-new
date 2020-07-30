import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
  

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  getemployee(){
    return this.http.get("htttp.localhost:3000/employee");
  }
}
