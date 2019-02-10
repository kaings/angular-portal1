import {Component} from '@angular/core';

@Component({
  selector: 'comp-1',
  template:
      `
        <ng-container>
          <ng-content></ng-content>
        </ng-container>
        
      `
})
export class Comp1Component {

}
