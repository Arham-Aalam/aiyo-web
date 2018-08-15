import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css', '../../assets/bootstrap/css/bootstrap.min.css', '../../styles/styles.css']
})
export class WorkComponent implements OnInit {
  cups:number = 60;
  projects:number = 100;
  clients:number = 100;
  constructor() { }

  ngOnInit() {
  }

}
