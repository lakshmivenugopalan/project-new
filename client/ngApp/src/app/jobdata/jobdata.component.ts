import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobdata',
  templateUrl: './jobdata.component.html',
  styleUrls: ['./jobdata.component.css']
})
export class JobdataComponent implements OnInit {

  dateofjoin: String;
  jobTitle: String;
  salary: String

  constructor() { }

  ngOnInit(): void {
  }

}
