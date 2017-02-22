import { Component,  
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy } from '@angular/core';
import { BdsState } from '../../reducers/bds'

@Component({
  selector: 'bds-item',
  template: `
  <div class="hvr-grow bds-item-container">
  	<div class="image">
  		<img [src]="bds.image"/>
  	</div>
  	<div class="item-info">
  		<span class="item item-name">{{bds.name}}</span>
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