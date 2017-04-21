import { Component } from '@angular/core'; 
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';
import { BdsItem } from '../../components';
import { AppState } from '../../reducers'
import { BdsState } from '../../reducers/bds'
import { BdsActions } from '../../actions/bdsActions'


@Component({
    selector: 'bds-page',
    template: `
          <div class="bds-page-container">
            <bds-item *ngFor="let bds of bdss$ | async"
               [bds]="bds">
            </bds-item>
          </div>
     `,
     styleUrls: ['./bds-page.container.css']
})
export class BdsPage {  
  @select('bds') readonly bdss$: Observable<BdsState>;
  constructor(public ngRedux: NgRedux<AppState>,
    private actions: BdsActions) {
      actions.loadBds()
    }
}