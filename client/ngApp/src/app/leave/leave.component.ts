import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  name:String;
  leaveBalance: String;
  leaveApplication: String;
  phone: String


  constructor() { }

  ngOnInit(): void {
  }

}
