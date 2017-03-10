import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../reducers';

@Injectable()
export class BdsActions {
  static LOAD_BDS = 'LOAD_BDS';

  constructor(private http: Http, private ngRedux: NgRedux<AppState>) {}

  loadBds() {
  	this.http.get(`http://truyenserver.esy.es/data.php`).map((res:Response) => res.json()).subscribe(val => {
  		this.ngRedux.dispatch({ type: BdsActions.LOAD_BDS, bdsArr: val.ads})
  	})
  }
}
