import {Component} from '@angular/core';

@Component({
  selector: 'app-submission',
  template:
      `
    <h2>Submission</h2>
    <p>this is where the Submission component is placed.</p>
    <p>In here you submit the data to be displayed in the dashboard.</p>

    <comp-1>
      <button (click)="handleClickSubmit()" class="btn btn-success">Submit</button>
    </comp-1>
  `
})
export class SubmissionComponent {
  handleClickSubmit() {
    console.log('Submission onClick()..... ');
  }
}
