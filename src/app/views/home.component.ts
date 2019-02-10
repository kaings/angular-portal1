import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:
      `
    <h2>Home</h2>
    <p>this is the main page.</p>
    <comp-1>
      
    </comp-1>
      `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
