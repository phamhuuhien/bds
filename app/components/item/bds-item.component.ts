import { Component,  
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy } from '@angular/core';
import { BdsState } from '../../reducers/bds'

@Component({
  selector: 'bds-item',
  template: `
  <div class="bds-item-container">
  	<span class="item item-name">{{bds.name}}</span>
  	<div class="image">
  		<img class="image" [src]="bds.image"/>
  	</div>
  	<div class="item-info">
  		<span class="item item-price">{{bds.price}}</span>
  		<span class="item item-time">{{bds.time}}</span>
  	</div>
  </div>
  `,
  styleUrls: ['./bds-item.component.css']
})
export class BdsItem {  
  @Input() bds: BdsState;
  constructor() { }
 };