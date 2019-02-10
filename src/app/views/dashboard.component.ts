import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template:
      `
    <h2>Dashboard</h2>
    <p>this is where the home component is placed.</p>
    <p>In here, all data submitted from the submission page is displayed.</p>

    <comp-1>
      
    </comp-1>
  `
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
